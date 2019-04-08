const mysql = require('../database/mysql')

module.exports = {
  getWikiModule: function (req, res, next) {
    mysql.query(`SELECT id, create_time, info, title, DATE_FORMAT(create_time, '%Y-%m-%d %h:%i:%s') as show_date From all_question ORDER BY id desc;`, function (err, list) {
      if (err) {
        console.log(err)
        res.send({err, list: []})
      } else {
        console.log(list)
        res.render('wiki', {list})
      }
    })
  },
  insertWikiModule: function (req, res, next) {
    let {title, author, info} = req.body
    if (!author) {
      let ip = req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress || ''
      author = ip.substring(ip.lastIndexOf(':'), ip.length)
    }
    let create_time = new Date().getTime()
    console.log(title, author, info, create_time)
    mysql.query(`INSERT INTO all_question (title, author, info) VALUES (${title}, ${author}, ${info});`, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        res.json({code: 1})
      }
    })
  },
  getWikeDetail: function (req, res) {
    let id = req.params.id
    mysql.query(`SELECT *, DATE_FORMAT(create_time, '%Y-%m-%d %h:%i:%s') as show_date FROM all_question WHERE id=${id};`, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        mysql.query(`SELECT *, DATE_FORMAT(create_time, '%Y-%m-%d %h:%i:%s') as show_date FROM all_wiki WHERE qid=${id};`, function (err1, list) {
          if (err1) {
            res.send({err: err1})
          } else {
            data[0].wiki = list
            console.log(data[0])
            res.render('wiki_detail', {data: data[0]})
          }
        })
      }
    })
  }
}
