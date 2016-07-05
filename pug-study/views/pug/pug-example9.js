var pug = require('pug')
pug.renderFile('example9.pug', null, function (error, html) {
	console.log(html)
})