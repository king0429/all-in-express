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
// })

connection.connect();


module.exports = connection
/*
<ul>
  <% for (let i = 0; i <= list.length; i++) {%>
    <li data-id='<%=list[i].id%>'>
      <p><%=i + 1%>.<%=list[i].name%></p>
      <p>wiki列表</p>
      <ol>
        <% for (let k = 0; k <= list[i].wiki.length; k++) {%>
          <p><%=list[i].wiki[j].info%></p>
          <div>
            <span>作者：<%=list[i].wiki[j].authoer%></span>
            <span>添加时间：<%=list[i].wiki[j].create_time%></span>
            <span>赞：<%=list[i].wiki[j].good%></span>
          </div>
        <%}%>
      </ol>
    </li>
  <%}%>
</ul>
*/
