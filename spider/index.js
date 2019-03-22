const cheerio = require('cheerio');

const request = require('request');

module.exports = {
	getA: function (id, callback) {
		request.get(`http://wufazhuce.com/article/${id}`, function (err, res, body) {
			let $ = cheerio.load(body)
			let info = {}
			let code = 0
			if ($('.lead').length > 0) {
				callback(null, 0)
			} else {
				callback($, 1)
			}
		})
	}
}

