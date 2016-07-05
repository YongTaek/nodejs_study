var pug = require('pug')
pug.renderFile('example15.pug', null, function (error, html) {
	console.log(html)
})