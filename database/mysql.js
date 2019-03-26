var mysql      = require('mysql');
// database in localhost
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mock_data_nsmain'
})
// database in home
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '123456789',
//   database : 'mock'
// });

connection.connect();


module.exports = connection
