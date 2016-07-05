var handlebars = require('handlebars')
	, fs = require('fs')

var data = {
	languages: ['php', 'node', 'ruby']
}

fs.readFile('example2.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})