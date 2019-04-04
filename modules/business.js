const mysql = require('../database/mysql')

module.exports = {
  getLegalperson: function (req, res) {
    let id = req.query.id
    let str = ''
    if (req.query.titles) {
      str = `SELECT ${req.query.title} FROM api_businessdetail WHERE id=${id};`
    } else {
      str = `SELECT * FROM api_businessdetail WHERE id=${id};`
    }
    mysql.query(str, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        res.json({code: 1, data:data[0]})
      }
    })
  }
}
