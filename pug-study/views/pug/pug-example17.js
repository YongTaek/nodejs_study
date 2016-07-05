var pug = require('pug'),
	fs = require('fs')

var data = {
	title: "Practical Node.js",
	author: {
		twitter: "@azat_co",
		name: "Azat"
	},
	tags: ['express', 'node', 'javascript']
}
data.body = process.argv[2]

fs.readFile('example17.pug', 'utf-8', function (error, source) {
	var template = pug.compile(source, {pretty: '\t'})
	var html = template(data)
	console.log(html)
});

// pug.renderFile('example17.pug', data, function (error, html) {
// 	console.log(html)
// })