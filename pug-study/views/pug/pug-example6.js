var pug = require('pug')
pug.renderFile('example6.pug', null, function (error, html) {
	console.log(html)
})