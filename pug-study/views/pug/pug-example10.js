var pug = require('pug')
pug.renderFile('example10.pug', null, function (error, html) {
	console.log(html)
})