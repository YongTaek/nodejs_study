var pug = require('pug')
pug.renderFile('example_pipe.pug',null,function (error, html) {
	console.log(html)
})