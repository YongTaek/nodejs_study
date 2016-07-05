var pug = require('pug')
pug.renderFile('example12.pug', null, function (error, html) {
	console.log(html)
})
