const xls = require('node-xlsx')
const accountORM = require('../orm/account')

module.exports = {
  getXlsFile: function (req, res) {
    let f = xls.parse('./files/demo1.xls')
    console.dir(accountORM.findAll)
    accountORM.findAll().then(data => {
      // console.table(data.map(val => val.dataValues))
    res.send({a: data.filter(val => val.id > 10)})
    // console.log(data)
    }).catch(err => {
      console.log(err)
    })
  }
}
