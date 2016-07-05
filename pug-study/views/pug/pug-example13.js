var pug = require('pug')
pug.renderFile('example13.pug', null, function (error, html) {
	console.log(html)
})