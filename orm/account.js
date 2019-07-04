const orm = require('../database/sequelize')
var Sequelize = require('sequelize')


const accountORM = orm.define('api_account', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true
  },
  avatar: Sequelize.STRING,
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: Sequelize.STRING,
  last_login_time: Sequelize.DATE,
  this_login_time: Sequelize.STRING,
  review_status: Sequelize.STRING,
  service_status: Sequelize.BOOLEAN,
  invitation_code_count: Sequelize.INTEGER,
  content_type_id: Sequelize.INTEGER,
  invite_by_id: Sequelize.INTEGER
}, {
  timestamps: false
})


module.exports = accountORM;
