const { getWeibo } = require('../spider')
const fs = require('fs')
const mysql = require('../database/mysql')
const bs = require('../database/admin').spider

module.exports = {
  weiboFile: function (req, res, next) {
    getWeibo(req.body.url, function ($) {
      if ($) {
        res.send({html: $.html()})
      } else {
        res.send('err')
      }
    })
  },
  getBusiness: function (req, res, next) {
    let objQuery = JSON.parse(req.body.listStr)
    if (Array.isArray(objQuery)) {
      let queryValue = objQuery.map((val, index) => {
        let arr = []
        for (let key in val) {
          arr.push(val[key])
        }
        return arr
      })
      // // mysql.query('insert')
      mysql.query("INSERT INTO spider_business(name, phone, address) VALUES ?;", [queryValue], function (err) {
        if (err) {
          res.send(err)
        } else {
          res.send({code: 1, queryValue})
        }
      })
    } else {
      res.send({code: 0, body: req.body})
    }
  },
  clearTable: function (req, res, next) {
    let tname = req.query.name || 'spider_business'
    mysql.query(`select name, GROUP_CONCAT(phone) as phone, GROUP_CONCAT(address) as address from ${tname} GROUP BY name;`, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        let arr = []
        let len = data.length
        if (len !== 0) {
          data.forEach(val => {
            let inner = []
            for (let key in val) {
              inner.push(val[key].split(','))
            }
            arr.push(inner)
          })
          let newList = []
          arr.forEach(val => {
            let obj = {}
            obj.name = val[0][0]
            obj.phone = val[1][0]
            obj.address = val[2][0]
            newList.push(obj)
          })
          mysql.query(`truncate table ${tname};`, function (err1) {
            if (err1) {
              res.send({err: err1})
            } else {
              let newArr = newList.map(val => [val['name'], val['phone'], val['address']])
              console.log('--------------------------')
              console.log(newArr)
              mysql.query(`INSERT INTO spider_business(name, phone, address) values ?;`, [newArr], function (err2) {
                if (err2) {
                  res.send(err2)
                } else {
                  res.send({newList, len})
                }
              })
            }
          })
        } else {
          let arr= bs.map(val => [val['name'], val['phone'], val['address']])
          console.log(arr)
          mysql.query(`INSERT INTO spider_business(name, phone, address) VALUES ?;`, [arr], function (err2) {
            if (err2) {
              res.send(err2)
            } else {
              res.send({arr})
            }
          })
        }
      }
    })
  }
}
