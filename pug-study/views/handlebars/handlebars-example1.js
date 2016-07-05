var handlebars = require('handlebars')
	, fs = require('fs')

var data = {
	title: 'Express.js Guide'
	, body: 'The Comprehensive Book on Express.js'
}

fs.readFile('example1.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})