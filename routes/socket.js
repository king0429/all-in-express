const mysql = require('../database/mysql')

module.exports = {
  getWikiList: function (e, ws) {
    if (e === 'getWikieList') {
      mysql.query(`SELECT * FROM all_question;`, function (err, data) {
        if (err) {
          wx.send(JSON.stringify(err))
        } else {
          ws.send(JSON.stringify(data))
        }
      })
    }
  }
}
