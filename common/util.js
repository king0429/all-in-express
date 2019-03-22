// 格式化时间
const $time = (date, sw) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (sw === 0) {
    return [year, month, day].map(formatNumber).join('-')
  } else  if (sw === 1) {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else if (sw === 2) {
    return [hour, minute, second].map(formatNumber).join(':')
  }
}
// 数字补零
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 0 到任意数值取随机数
const $random = base => {
  return Math.ceil((Math.random() * 1000000) % base)
}
// 初始化全年月数组
const $initMonth =  () => {
  let month = []
  for (let m = 1; m <= 12; m++) {
    let str = m
    m < 10 ? str = '0' + m : str = m.toString()
    month.push({title: str, len: 0})
  }             
  return month
}
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
  $time, $random, $query, $initMonth, $sql_format_time
}