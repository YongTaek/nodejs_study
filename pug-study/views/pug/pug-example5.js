var pug = require('pug')
pug.renderFile('example5.pug', null, function (error, html) {
	console.log(html)
})