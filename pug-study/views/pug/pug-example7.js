var pug = require('pug')
pug.renderFile('example7.pug', null, function (error, html) {
	console.log(html)
})