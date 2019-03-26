var db = {}

var num = 0
var l = 0
var k = 0

const getRandom = function (num) {
	let s = ((Math.random() * 100000) % num).toFixed(0)
	return s
}
var user = [
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
	{name: '管理员' + k++, last_login: '2018-08-20 20:14:33', email: 'admin' + k++ + '@ninscf.com', phone: '13167553096'},
]
db.user = user[getRandom(user.length)]
db.businessList = [
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)},
	{id: ++num, sign_account: '12167552096', type: getRandom(2), name: '公司名称' + l++, status: getRandom(2), person_account: getRandom(2), phone: '12167552096', legal_person: '法人' + l++, sign_time: '2018-04-' + getRandom(30)}
]

db.banner = [
	{url: '/files/banner1.jpg', is_use: 1},
	{url: '/files/banner2.jpg', is_use: 1},
	{url: '/files/banner3.jpg', is_use: 1},
	{url: '/files/banner4.jpg', is_use: 1},
]
module.exports = db