var pug = require('pug')
var data = { 
	url: "/logout",
	isActive: true,
	isChecked: false
}
pug.renderFile('example4.pug', data, function (error, html) {
	console.log(html)
})