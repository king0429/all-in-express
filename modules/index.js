const mysql = require('../database/mysql')
const { getA } = require('../spider')
let { $initMonth, $sql_format_time } = require('../common/util')
// console.log($query.find('api_chain', null, 'limit 15'))
// 首页表单
exports.index = {
	index_get: function (req, res) {
		res.render('index', {title: 'nodeJS'})
	},
	index_post: function (req, res) {
		if (!req.body.id) {
			res.send({num: req.body.num})
		} else {
			res.redirect(`/spider/${req.body.id}`)
		}
	}
}
// 获取每月创建数量
const getLen = function (arr) {
	let arr1 = $initMonth()
	arr.forEach(val => {
		arr1.forEach(el => {
			if (val.asc_month === el.title) {
				el.len++
			}
		})
	})
	return arr1.map(val => val.len)
}
// 计算书签
// const setMarks = function  (arr) {
//
// }

// 图表数据分析
exports.chart = {
	index_get: function (req, res) {
		mysql.query($sql_format_time('api_order'), function (err, data) {
			mysql.query($sql_format_time('api_contract'), function (err1, data1) {
				mysql.query($sql_format_time('api_invoice'), function (err2, data2) {
					mysql.query($sql_format_time('api_payment'), function (err3, data3) {
						if (err3) {
							res.send(err3, req)
						} else {
							if (err2) {
								res.send(err2, req)
							} else {
								if (err1) {
									res.send(err1, req)
								} else {
									if (err) {
										res.send(err, req)
									} else {
										// 订单完成情况
										let finished = {finished: 0, unfinished: 0}
										data.forEach(val => {
											val.finish ? finished.finished++ : finished.unfinished++
										})
										finished.sum = finished.finished + finished.unfinished
										// 计算发票支付情况
										let paid = {paid: 0, unpaid: 0}
										data2.forEach(val => {
											val.payment_id ? paid.paid++ : paid.unpaid++
										})
										paid.sum = paid.paid + paid.unpaid
										// send data
										let months = $initMonth().map(val => val.title)
										let list = getLen(data)
										// let contracts = month_contract.map(val => val.len)
										let contracts = getLen(data1)
										// let invoices = month_invoice.map(val => val.len)
										let invoices = getLen(data2)
										// let payments = month_payment.map(val => val.len)
										let payments = getLen(data3)
										res.render('chart', {list, months, contracts, invoices, paid, finished, payments})
									}
								}
							}
						}
					})
				})
			})
		})
	}
}


// 爬虫文章结果路由
exports.sqider = {
	index: function (req, res) {
		// console.log(req.body)
		// console.log(req.query)
		// let	cookieMarks = JSON.parse(req.cookies.bookmarks).list
		getA(req.params.id, function ($, code) {
			if (code === 1) {
				let dom = $('.articulo-contenido')
				let s = []
				let arr = $('.articulo-contenido').children('p')
				let title = $('.articulo-titulo').text()
				if (arr.length !== 0) {
					for (let i = 0; i < arr.length; i++) {
						s.push('<p>' + arr.eq(i).text() + '</p>' + '<br>')
					}
				} else {
					s = dom.html().split('<br>')
					let a = []
					s.forEach(val => {
						if (val) a.push(`<p>${val}</p>`)
					})
					s = a
				}
				// 组织缓存
				res.header('Cache-Control', 'no-store')
				res.render('inner_index', {data: s, title})
			} else {
				res.render('inner_index', {data: [], title: '未找到'})
			}
		})
	}
}
