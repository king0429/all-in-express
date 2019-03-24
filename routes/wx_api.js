var express = require('express');
var router = express.Router();
const db = require('../database/wx_data')
const util = require('../common/util.js')
const fs = require('fs')
var sendData = {}
let getClientIp = function (req) {
    return req.headers['x-real-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.headers['HTTP_CLIENT_IP'] ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};

/* 微信小程序接口  nosql版本， sql版本转化成 sql语句*/
router.get('/test', function(req, res, next) {
	let rs = fs.readFileSync('./database/wx_data.js', 'utf-8')
	var hah = eval(rs)
	hah.good[3].uid = '77777'
	var str = JSON.stringify(hah)
	fs.writeFileSync('./database/aaa.js', str, 'utf-8')
  res.send({db})
});
router.get('/ip', function (req, res) {
	console.log(req)
	let cip = req.ip
	let rarlIP = cip.substr(7, cip.length - 1)
	res.send({ip: rarlIP, ips: req.ips})
})
/* Restfuk api*/
// 首页轮播图接口，推送之前一天的top 5
router.get('/yesterday', function (req, res, next) {
	let yesterday = util.$time(new Date(Number(new Date().valueOf()) - 3600 * 24 * 1000), 0)
	sendData.yesterday = []
	db.sentence.forEach(val => {
		console.log(val.date_created)
		if (val.date_created === yesterday) {
			console.log(val.date_created)
			sendData.yesterday.push(val)
		}
	})
	let arr = sendData.yesterday
	console.log(arr)
	if (sendData.yesterday.length !== 0) {
		arr.sort((a, b) => {
			return b.hot-a.hot
		})
	}
	let sortYesterday = []
	arr.forEach((val, index) => {
		if (index <= 4) {
			sortYesterday.push(val)
		}
	})
	sendData.yesterday = sortYesterday
	sendData.code = 1
	res.json(sendData)
	sendData = {}
})
// 今日话题
router.get('/today', function (req, res, next) {
	console.log(req.query)
	if (req.query.date) {
		let pointDate = req.query.date
		sendData.today = []
		db.topic.map((val) => {
			if (val.date === pointDate) {
				sendData.today.push(val)
			}
		})
		sendData.code = 1
		console.log(sendData)
		res.json(sendData)
	} else {
		sendData.code = 0
		sendData.message = '日期错误'
		res.json(sendData)
	}
	sendData = {}
})
// 当前热门
router.get('/hot', function (req, res, next) {
	let today = util.$time(new Date(), 0)
	sendData.hot = []
	db.sentence.forEach(val => {
		if (val.date_created === today) {
			sendData.hot.push(val)
		}
	})
	let arr = []
	sendData.hot.forEach((val, index) => {
		if (index <= 2) {
			arr.push(val)
		}
	})
	sendData.hot = arr
	sendData.code = 1
	res.json(sendData)
	sendData = {}
})
// 算法返回
router.get('/helloworld', function (req, res, next) {
	if (req.query.uid) {
		// console.log(db.hw)
		sendData.helloworld = db.hw[util.$random(db.hw.length)]
		console.log(util.$random(db.hw.length))
		sendData.code = 1
		res.json(sendData)
	} else {
		sendData.code = 0
		res.json(sendData)
	}
	sendData = {}
})
// 我的话题
router.get('/mytopic', function (req, res, next) {
	console.log(req.query)
	if (req.query.uid) {
		var arr = []
		console.log(db.sentence)
		db.sentence.forEach(val => {
			if (val.uid === req.query.uid) {
				arr.push(val)
			}
		})
		let arr1 = []
		let good = 0
		db.topic.forEach(val => {
			arr.forEach(val1 => {
				if (val1.topic_id === val.id) {
					// console.log(val1)
					arr1.push(val)
					good += val1.good
				}
			})
		})
		// console.log(good)
		sendData.mytopic = arr1
		sendData.good = good
		sendData.code = 1
		res.json(sendData)
	} else {
		sendData.code = 0
		res.json(sendData)
	}
	sendData = {}
})
// 提交话题
router.post('/mytopic', function (req, res, next) {
	if (req.params.uid && req.params.topic_id) {
		sendData.code = 1
		sendData.msg = '提交成功'
	} else {
		sendData.code = 0
		sendData.msg = '无用户名'
	}
	sendData = {}
})
// 我的句子
router.get('/mysentence', function (req, res, next) {
	if (req.query.uid) {
		let arr = []
		let good = 0
		db.sentence.forEach(val => {
			if (val.uid === req.query.uid) {
				arr.push(val)
				good += val.good
			}
		})
		sendData.sentence_list = arr
		sendData.good = good
		sendData.code = 1
		res.json(sendData)
	} else {
		sendData.code = -1
		sendData.msg = '未知用户'
		res.json(sendData)
	}
	sendData = {}
})
// 我提交的句子
router.post('/mysentence', function (req, res, next) {
	if (req.body.uid) {
		console.log('ok')
	} else {
		console.log('err')
	}
	sendData = {}
})
// 我的点赞
router.get('/mygood', function (req, res, next) {
	if (req.query.uid) {
		let arr = []
		sendData.code = 1
		db.good.forEach(val => {
			if (val.uid === req.query.uid) {
				arr.push(val)
			}
		})
		console.log(arr)
		let showArr = []
		arr.forEach(val => {
			db.sentence.forEach(val1 => {
				if (val.sentence_id === val1.id) {
					showArr.push({...val, ...val1})
					// showArr.push(val1)
				}
			})
		})
		// console.log(showArr)
		sendData.mygood = showArr
		res.json(sendData)
	} else {
		sendData.code = 0
		res.json(sendData)
	}
	sendData = {}
})
// 我的收藏
router.get('/mycollection', function (req, res, next) {
	if (req.query.uid) {
		sendData.code = 1
		let arr = []
		db.collection.forEach(val => {
			if (val.uid === req.query.uid) {
				arr.push(val)
			}
		})
		console.log(arr)
		let showData = []
		db.sentence.forEach((item) => {
			console.log(item)
		  arr.forEach((item1) => {
		    if (item.id === item1.sentence_id) {
		    	showData.push({...item, ...item1})
		    }
		  })
		})
		sendData.collection = showData
		res.json(sendData)
	} else {
		sendData.code = 0
		res.json(sendData)
	}
	sendData = {}
})
module.exports = router;
