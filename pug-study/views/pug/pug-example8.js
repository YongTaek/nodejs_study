var pug = require('pug')
pug.renderFile('example8.pug', null, function (error, html) {
	console.log(html)
})