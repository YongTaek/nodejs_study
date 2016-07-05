var handlebars = require('handlebars')
	, fs = require('fs')

var data = {
	user: {
		contact: {
			email: 'hi@azat.co'
			, twitter: 'azat_co'
		}
		,address: {
			city: 'San Francisco'
			, state: 'California'
		}
		,name: 'Azat'
	}
}

fs.readFile('example6.handlebars', 'utf-8', function (error, source) {
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})