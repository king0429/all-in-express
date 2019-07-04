const Sequelize = require('sequelize')

const orm = new Sequelize('mock_data_nsmain', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // 表名是否加 s
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 100000
  },
  time: '+08:00'
})


module.exports = orm;