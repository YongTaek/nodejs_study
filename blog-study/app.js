var express = require('express')
  , http = require('http')
  , routes = require('./routes')
  , config = require('./config')
  , path = require('path')
  , mongoose = require('mongoose')
  , models = require('./models')
  , favicon = require('serve-favicon')
  , dbUrl = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/blog'
  , db = mongoose.connect(dbUrl, {safe: true})
  , everyauth = require('everyauth')

// Express.js 미들웨어
var session = require('express-session')
  , logger = require('morgan')
  , errorHandler = require('errorhandler')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override');

everyauth.debug = true
everyauth.google
  .appId(config.google.clientId)
  .appSecret(config.google.clientSecret)
  .scope('https://www.googleapis.com/auth/userinfo.profile  https://www.google.com/m8/feeds/')
  .findOrCreateUser(function (sess, accessToken, extra, googleUser) {
    var promise = this.Promise()
    process.nextTick(function () {
      if(googleUser.name === '오용택') {
        sess.user = googleUser
        sess.admin = true
      }
      promise.fulfill(googleUser)
    })
    return promise
  })
  .redirectPath('/admin')

everyauth.everymodule.handleLogout(routes.user.logout)
everyauth.everymodule.findUserById(function (user, callback) {
  callback(user)
})

var app = express();
app.locals.appTitle = 'blog-express'

// view engine setup
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next) {
  if (!models.Article || ! models.User) return next(new Error("No collections."))
    req.models = models;
  return next();
});

// Express.js 미들웨어 설정
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('3CCC4ACD-6ED1-4844-9217-82131BDCB239'));
app.use(session({secret: '2C44774A-D649-4D44-9535-46E296EF984F'}))
app.use(everyauth.middleware())
app.use(methodOverride())
app.use(require('stylus').middleware(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')));

// 인증 미들웨어
app.use(function (req, res, next) {
  if(req.session && req.session.admin)
    res.locals.admin = true
  next()
});

var authorize = function (req, res, next) {
  if(req.session && req.session.admin)
    return next()
  else
    return res.send(401)
}

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// 페이지와 경로
app.get('/', routes.index)
app.get('/login', routes.user.login)
app.post('/login', routes.user.authenticate)
app.get('/logout', routes.user.logout)
app.get('/admin', authorize, routes.article.admin)
app.get('/post', authorize, routes.article.post)
app.post('/post', authorize, routes.article.postArticle)
app.get('/articles/:slug', routes.article.show)
app.post('/comment/:slug', routes.article.addComment)

// REST API 경로
app.all('/api', authorize)
app.get('/api/articles', routes.article.list)
app.post('/api/articles', routes.article.add)
app.put('/api/articles/:id', routes.article.edit)
app.del('/api/articles/:id', routes.article.del)
app.all('*', function (req, res) {
  res.send(404)
})

var server = http.createServer(app);
var boot = function(){
  server.listen(app.get('port'),function(){
    console.info('express server listening on port '+ app.get('port'));
  });
}
var shutdown = function(){
  server.close();
}
if (require.main === module){
  boot()
} else {
  console.info('Running app as a module')
  exports.boot = boot;
  exports.shutdown = shutdown;
  exports.port = app.get('port');
}