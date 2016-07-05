var pug = require('pug')
pug.renderFile('example14.pug', null, function (error,html) {
	console.log(html)
})