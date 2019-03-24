// sql查询
const $query = {
  find: (table, clo, info) => {
    let clos = ''
    if (clo) {
      clos = 'clo'
    } else {
      clos = '*'
    }
    return `SELECT ${clos} from ${table} ${info}`
  }
}
// 序列化创建时间
const $sql_format_time = (table ,str) => `SELECT *, DATE_FORMAT(create_time, '%Y-%m-%d %T') as create_time, DATE_FORMAT(create_time, '${str ? str : '%m'}') asc_month from ${table}`

module.exports = {
	$query, $sql_format_time
}