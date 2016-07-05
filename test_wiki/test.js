var infobox = require('wiki-infobox')

var page = '중국'
var language = 'ko'

infobox(page, language, function (err, data) {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
})