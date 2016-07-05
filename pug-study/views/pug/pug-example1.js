var pug = require('pug')
pug.renderFile('example1.pug',null,function (error, html) {
	console.log(html)
})