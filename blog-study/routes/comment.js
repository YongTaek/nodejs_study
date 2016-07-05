require('date-utils')
exports.addComment = function (req, res, next) {
	if (!req.body.content) {
		return res.render('post', {error: 'Fill title, slug and text.'});
	}
	var comment = {
		content : req.body.content,
		date : Date.today(),
		post : req.body.post
	}
}

exports.comment = function (req, res, next) {
	req.collections.commnets.find({}).toArray(function (error,articles) {
      if(error) return next(error)
      res.send({articles:articles})
    })
}