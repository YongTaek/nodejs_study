var handlebars = require('handlebars')
	, fs = require('fs')

var data = {
	arr: [
		'<a>a</a>'
		, '<i>italic</i>'
		, '<strong>bold</strong>'
		]
}

fs.readFile('example3.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})