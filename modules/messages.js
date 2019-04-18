const mysql = require('../database/mysql')

// dc: 每日增长， dr: 每日阅读， ds: 每日信息总量
module.exports = {
  getMonthModle: function (req, res) {
    let monthArr = []
    for (let i = 1; i <= 12; i++) {
      let str = i < 10 ? '0' + i : i.toString()
      monthArr.push({len: 0, post_month: `2018年${str}月`, months: str})
    }
    mysql.query(`SELECT
      count(id) len,
      DATE_FORMAT(post_time, '%Y年%m月') post_month,
      DATE_FORMAT(post_time, '%m') months
      FROM api_businessmessage
      GROUP BY DATE_FORMAT(post_time, '%y-%m');`, function (err, data) {
      if (err) {
        res.send({err})
      }else {
        monthArr.forEach((val, index) => {
          data.forEach(cur => {
            if (cur.months === val.months) {
              monthArr[index] = cur
            }
          })
        })
        console.log(monthArr)
        res.render('message', {month: monthArr})
      }
    })
  },
  getMessageModule: function (req, res) {
    mysql.query(`SELECT
      DATE_FORMAT(post_time, '%Y-%m-%d') as create_time,
      GROUP_CONCAT(id) id,
      GROUP_CONCAT(\`read\`) hasRead,
      GROUP_CONCAT(msg_id) msg_id
      FROM api_businessmessage
      GROUP BY DATE_FORMAT(post_time, '%Y-%m-%d');`, function (err, data) {
        if (err) {
          res.send({err})
        } else {
          let dr = []
          let ds= []
          let sum = 0
          let dc = data.map((val, index) => {
            let d = val.hasRead.split(',')
            dr.push({date: val.create_time, read: d.filter(item => Number(item)).length / d.length})
            ds.push({sum: sum += val.hasRead.length, date: val.create_time})
            if (index !== data.length - 1) {
              // dr.push()
              return {nums: data[index + 1].id.split(',').length - val.id.split(',').length, date: val.create_time}
            }
          })
          dc.splice(dc.length - 1)
          res.send({dc, dr, len1: data.length, len2: dc.length, ds, len3: ds.length})
        }
      })
  }
}
