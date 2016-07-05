var pug = require('pug')
pug.renderFile('example16_file_b.pug', null, function (error, html) {
	console.log(html)
})