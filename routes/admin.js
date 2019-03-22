var express = require('express');
var router = express.Router();
var db = require('../database/admin.js')
const page = (arr, pageSize, getPage) => {
	console.log(getPage)
	let page = []
	if (arr.length <= 10) {
		page = arr
	} else {
		arr.forEach((val, index) => {
			if ((index >= (getPage - 1) * 10) && (index < getPage * 10)) {
				page.push(val)
			}
		})
	}
	return page
}

router.get('/', function (req, res) {
	res.json({errMsg: '运营后台！'})
})

router.all('/login', function (req, res) {
	let user = req.body.uname || req.query.uname
	let pwd = req.body.pwd || req.query.pwd
	if (!user) {
		res.json({code: -1, errMsg: '用户名为空'})
	} else {
		if (user !== 'admin') {
			res.json({code: -2, errMsg: '用户名不存在'})
		} else {
			if (pwd !== 'admin') {
				res.json({code: -3, errMsg: '密码错误'})
			} else {
				res.json({code: 1, errMsg: '成功', uid: '8023'})
			} 
		}
	}
})
// 获取登陆人信息
router.all('/getuserinfo', function (req, res) {
	console.log(req.body)
	if (req.query.token === '8023' || req.body.token === '8023') {
		res.send({userinfo: db.user, code: 1})
	} else {
		res.send({code: 0, errInfo: '查无用户'})
	}
})
// 获取企业列表
router.all('/get_businesslist', function (req, res) {
	console.log(req.query)
	let params = req.query.token || req.body.token
	let type = req.query.type || req.body.type
	let getPage = req.query.page || req.body.page || 1
	if ( params === '8023') {
		// res.send({business_list: db.businessList, code: 1})
		let sendData = []
		if (Number(type) === 0) {

			res.send({businessList: page(db.businessList, 10, getPage), code: 1, total: db.businessList.length})		
		} else {
			db.businessList.forEach((val) => {
				console.log(val)
			  if (Number(val.status) === Number(type)) {
			  	sendData.push(val)
			  }
			})
			res.send({businessList: page(sendData, 10, getPage), code: 1, total: sendData.length})			
		}
	} else {
		res.send({code: 0, errInfo: '查无用户'})		
	}
})

// 获取banner图地址
router.all('/get_banner', function (req, res) {
	let params = req.query || req.body
	if (params.token === '8023') {
		res.send({banner_list: db.banner, code: 1})
	} else {
		res.send({code: 0, errInfo: '查无用户'})
	}
})

// 获取企业信息
router.all('/get_business_detail', function (req, res) {
	let params = req.query || req.body
	
})
module.exports = router;