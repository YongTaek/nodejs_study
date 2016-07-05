var handlebars = require('handlebars')
	, fs = require('fs')

var data = {
	user: {
		admin: true
	}
}

fs.readFile('example5.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})