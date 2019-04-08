const mysql = require('../database/mysql')

module.exports = {
  getWikiList: function (ws) {
    mysql.query(`SELECT * FROM all_question;`, function (err, data) {
      if (err) {
        ws.send(JSON.stringify(err))
      } else {
        ws.send(JSON.stringify(data))
      }
    })
  }
};
