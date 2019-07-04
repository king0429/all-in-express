const xls = require('node-xlsx')

module.exports = {
  getXlsFile: function (req, res) {
    let f = xls.parse('./files/demo1.xls')
    res.send({len: f[0]})
  }
}
