var handlebars = require('handlebars')
	, fs = require('fs')


fs.readFile('example8.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template()
	console.log(html)
})