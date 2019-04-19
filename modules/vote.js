const mysql = require('../database/mysql')
const redis = require('../database/redis')

module.exports = {
  getVoteModule: function (req, res) {
    mysql.query(`SELECT id, name, len FROM api_vote;`, function (err, data) {
      if (err) {
        res.send({err})
      } else {
        redis.get('vote', function (data1, err) {
          res.render('vote', {vote: data})
        })
      }
    })
  },
  setVoteModule: function (req, res) {
    let {role, named} = req.body
    redis.get('vote', function (err, data) {
      console.log('vote', data)
      if (err) {
        res.send(err)
      } else {
        let roleObj = {}
        if (!data) {
          roleObj[role] = {time: 1, update_time: new Date().getTime()}
          redis.set('vote', JSON.stringify(roleObj), function (err2) {
            if (err2) {
              res.send({err2})
            } else {
              mysql.query(`UPDATE api_vote set len = len + 1 where id=${named};`, function (err1) {
                if (err1) {
                  res.send({err1})
                } else {
                  res.send({code: 1})
                }
              })
            }
          })
        } else {
          roleObj = JSON.parse(data)
          console.log(roleObj)
          if (!roleObj[role]) {
            roleObj[role] = {time: 1, update_time: new Date().getTime()}
            redis.set('vote', JSON.stringify(roleObj), function (err2) {
              if (err2) {
                res.send({err2})
              } else {
                mysql.query(`UPDATE api_vote set len = len + 1 where id=${named};`, function (err1) {
                  if (err1) {
                    res.send({err1})
                  } else {
                    res.send({code: 1})
                  }
                })
              }
            })
          } else {
            if (roleObj[role].time < 3) {
              roleObj[role] = {time: ++roleObj[role].time, update_time: new Date().getTime()}
              redis.set('vote', JSON.stringify(roleObj), function (err2) {
                if (err2) {
                  res.send({err2})
                } else {
                  mysql.query(`UPDATE api_vote set len = len + 1 where id=${named};`, function (err1) {
                    if (err1) {
                      res.send({err1})
                    } else {
                      res.send({code: 1})
                    }
                  })
                }
              })
            } else {
              res.send({code: '400', err: '超过次数'})
            }
          }
        }
      }
    })
  }
}
