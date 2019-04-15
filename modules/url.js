const uid = require('uid')
const mysql = require('../database/mysql')
const _root = `http://127.0.0.1:3001/url/`

module.exports = {
  getUrlModule: function (req, res) {
    res.render('url')
  },
  setUrlModule: function (req, res) {
    let url = req.body.url
    mysql.query(`SELECT \`hash\`, update_time from api_url WHERE origin_url="${url}";`, function (err1, data1) {
      if (err1) {
        res.send({err1})
      } else {
        if (data1.length !== 0) {
          res.send({url, shot_url: `${_root}${data1[0].hash}`, hash: data1[0].hash, update_time: data1[0].update_time, code: 1})
        } else {
          let _id = uid(10)
          mysql.query(`insert into api_url (origin_url, \`hash\`, update_time) values("${url}", "${_id}", NOW());`, function (err, data) {
            if (err) {
              res.send({err})
            } else {
              res.send({url, shot_url: `${_root}${_id}`, hash: _id, code: 1})
            }
          })
        }
      }
    })
  },
  navigatorModule: function (req, res) {
    let id = req.params.id
    mysql.query(`SELECT origin_url from api_url where \`hash\` = "${id}";`, function (err, data) {
      if (err) {
        res.send({err, msg: '网络错误'})
      } else {
        if (data.length === 0) {
          res.send('无效的ID')
        } else {
          // console.log()
          res.redirect(301, data[0].origin_url);
          // res.send({data: data})
        }
      }
    })
  }
}
