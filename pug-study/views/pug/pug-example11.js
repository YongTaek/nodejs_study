var pug = require('pug')
pug.renderFile('example11.pug', null, function (error, html) {
	console.log(html)
})