const cheerio = require('cheerio');

const request = require('request');
const headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}

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
	},
	getWeibo: function (url, callback) {
		request.get(url, {headers}, function (err, res, body) {
			let $ = cheerio.load(body)
			if ($('vidoe')) {
				callback($)
			}
		})
	}
}
