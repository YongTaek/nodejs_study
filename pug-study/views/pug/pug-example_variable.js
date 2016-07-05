var pug = require('pug')
var data = {
	title: "Express.js Guide",
	body: "The Comprehensive Book on Express.js"
}
pug.renderFile('example_variable.pug',data,function (error, html) {
	console.log(html)
})