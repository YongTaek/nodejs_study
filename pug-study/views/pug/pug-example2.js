var pug = require('pug')
pug.renderFile('example2.pug', null, function (error, html) {
	console.log(html)
})