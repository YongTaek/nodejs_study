var handlebars = require('handlebars')
, fs = require('fs')

var data = {
	node: [
		{name: 'express', url: 'http://expressjs.com/'}
		, {name: 'hapi', url: 'http://spumko.github.io/'}
		, {name: 'compound', url: 'http://compoundjs.com/'}
		, {name: 'derby', url: 'http://derbyjs.com/'}
	]
}

fs.readFile('example9.handlebars', 'utf-8', function (error, source) {
	handlebars.registerHelper('table',function (node) {
		var str = '<table>'

		for (var i =0; i < node.length; i++ ) {
			str += '<tr>'
			for (var key in node[i]) {
				str += '<td>' + node[i][key] + '</td>'

			};
			str += '</tr>'
		};
		str += '</table>'

		return new handlebars.SafeString(str)
	});
	var template = handlebars.compile(source)
	var html = template(data)
	console.log(html)
})
