const redis = require('../database/redis')
const mysql = require('../database/mysql')
module.exports = {
  getSearchModule: function (req, res) {
    redis.get('hotwords', function (err, hotwords) {
      if (err) {
        res.send({code: 0, err})
      } else {
        console.log(hotwords)
        if (!hotwords) {
          res.render('file', {hotwords: []})
        } else {
          let obj = JSON.parse(hotwords)
          // arr.sort((cur, next) => cur - next)
          let arr = []
          for (let item in obj) {
            arr.push({name: item, time: obj[item].times})
          }
          // let st = Object.keys(arr)
          // 排序 截取
          let hots = arr.sort((cur, nex) => nex.time - cur.time).slice(0, 6)
          res.render('file', {hotwords: hots})
        }
      }
    })
  },
  searchModule: function (req, res) {
    let key = req.body.keyword
    redis.get('hotwords', function (err, hotwords) {
      if (!hotwords) {
        let obj = {}
        obj[key] = {times: 1, last_update_time: new Date().getTime()}
        redis.set('hotwords', JSON.stringify(obj), function (err, res) {
          if (err) {
            console.log(err)
            res.send({err})
          }
        })
      } else {
        let obj = JSON.parse(hotwords)
        if (obj[key]) {
          obj[key]['times']++
          obj[key]['last_update_time'] = new Date().getTime()
        } else {
          obj[key] = {times: 1, last_update_time: new Date().getTime()}
        }
        redis.set('hotwords', JSON.stringify(obj), function (err) {
          if (err) {
            console.log(err)
            res.send({err})
          }
        })
      }
    })
    mysql.query(`SELECT id, name, region_code, legal_person_id, detail_id FROM api_business WHERE name LIKE '%${key}%' ORDER BY id;`, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        res.send({code: 1, data})
      }
    })
  }
}
