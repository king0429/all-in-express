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
db.spider = [
	{"name":"云商未来（北京）科技有限公司","phone":"18510803605","address":"北京市海淀区上地信息路1号(北京实创高科技发展总公司1-1"},
	{"name":"云教（北京）科技有限公司","phone":"15210349103","address":"天秀路10号中国农大国际创业园1号楼417"},
	{"name":"免费营销软件站","phone":"15300027870","address":"北京市通州区"},
	{"name":"北京万邦众和科技有限公司","phone":"18911561512","address":"北京市海淀区阜石路甲69号院12号楼4层2单元404"},
	{"name":"北京万里开源软件有限公司","phone":"13699286613","address":"北京市丰台区丰台镇北大街甲13号（园区）"},
	{"name":"北京世纪清鸿科技有限公司","phone":"13717509761","address":"北京市海淀区上地信息路1号1号楼21层2102-2"},
	{"name":"北京中商流通生产力促进中心","phone":"13122222222","address":"北京市海淀区海淀南路32号中信国安数码港第7层12单元"},
	{"name":"北京中电方大科技股份有限公司","phone":"18201031302","address":"上地信息路12号中关村发展大厦E座3层"},
	{"name":"北京中视文广科技有限公司","phone":"18612695279","address":"北京市海淀区龙岗路51号6号楼二层757室"},
	{"name":"北京乾元坤和科技有限公司","phone":"18811129874","address":"北京市海淀区永泰东里怡清园1号楼2层2-015"},
	{"name":"北京五木恒润科技有限公司","phone":"15811334744","address":"北京市昌平区回龙观镇立业路13号1幢1至3层101-2062"},
	{"name":"北京信必优信息技术有限公司","phone":"18362952223","address":"海淀区上地五街5号 高立二千大厦一层"},
	{"name":"北京卓正志远软件有限公司","phone":"13426181552","address":"北京市朝阳区望京园601号楼9层1012"},
	{"name":"北京双髻鲨科技有限公司","phone":"18618288820","address":"北京市昌平区回龙观镇黄平路19号院1号楼15层1501"},
	{"name":"北京同泰辉煌软件有限公司","phone":"17187473736","address":"北京市海淀区万柳中路11号2层2-046号"},
	{"name":"北京商路通信息技术有限公司","phone":"13381077221","address":"北京市海淀区苏州街72号院2号楼706室"},
	{"name":"北京大星传媒有限公司","phone":"13681192748","address":"朝阳区双花园南里二区11号楼3层336"},
	{"name":"北京天健通泰科技有限公司","phone":"18500734069","address":"中关村南大街12号中国农业科学院内科海福林大厦601室"},
	{"name":"北京天创科林科技有限公司","phone":"15910420789","address":"北京市海淀区彩和坊路8号11层1113"},
	{"name":"北京奇迹众成软件有限公司","phone":"13522582922","address":"北京市海淀区东北旺西路8号院4号楼1层105号"},
	{"name":"北京奥伯特石油科技有限公司","phone":"18518387498","address":"北京市工商行政管理局"},
	{"name":"北京好乐通科技有线公司","phone":"18311344192","address":"北京海淀区清河同源大厦"},
	{"name":"北京幂峰科技有限公司","phone":"18903542124","address":"北京市朝阳区安定门外大街1号11层(安贞孵化器C300号)"},
	{"name":"北京广图软件科技有限公司","phone":"17710670213","address":""},
	{"name":"北京微商之家科技有限公司","phone":"17640561535","address":"北京市海淀区高里掌1号院6号楼102-184"},
	{"name":"北京德新通泰科技有限公司","phone":"18515219318","address":"万柳桥宝隆大厦"},
	{"name":"北京德派软件有限公司","phone":"15001137400","address":""},
	{"name":"北京慧都创新科技有限公司","phone":"18841129437","address":""},
	{"name":"北京文通科技有限公司","phone":"18611928359","address":"北京市海淀区北四环西路9号银谷大厦1609室"},
	{"name":"北京易乐天行健教育科技有限公司","phone":"13031065456","address":""},
	{"name":"北京易泊科技有限公司","phone":"18664176914","address":""},
	{"name":"北京易知路科技有限公司","phone":"15832677145","address":"北京市海淀区"},
	{"name":"北京星发布科技发展有限公司","phone":"15001090442","address":"北京市朝阳区三间房乡西柳村中街(三间房动漫集中办公区6701号)"},
	{"name":"北京有慧科技有限公司","phone":"18206387017","address":"北京市朝阳区金盏乡皮村村西5号厂房(谷仓科技孵化器2225号)"},
	{"name":"北京析跃科技有限公司","phone":"15201038227","address":"酒仙桥中路18号 国投创意产业园区北楼306室"},
	{"name":"北京汇人科技发展有限公司","phone":"13910726752","address":""},
	{"name":"北京溢润伟业软件科技有限公司","phone":"18632155967","address":"北京市房山区良乡长虹西路翠柳东街1-711号"},
	{"name":"北京炎黄新星网络科技有限公司","phone":"18111111111","address":"北京市海淀区上地三街9号嘉华大厦F座805室"},
	{"name":"北京现在支付有限公司","phone":"18612977271","address":""},
	{"name":"北京百顺世纪科技有限公司","phone":"13910788641","address":"北京市海淀区永泰东里怡清园1号楼2单元909室"},
	{"name":"北京盈海拓佳科技有限公司","phone":"15652934789","address":"北京市平谷区中关村科技园区平谷园物流基地5号-5130"},
	{"name":"北京睿芸翰林信息技术发展有限公司","phone":"15910507452","address":"北京市海淀区上地十街辉煌国际大厦"},
	{"name":"北京童虎科技有限公司","phone":"15010424622","address":"北京市海淀区农大南路1号院2号楼7层办公B-721-1"},
	{"name":"北京紫光百会科技有限公司","phone":"18511529962","address":"北京市海淀区中关村南大街甲10号41号楼银海大厦北区二层218房间"},
	{"name":"北京网识科技有限公司","phone":"18612492659","address":"北京市海淀区"},
	{"name":"北京至远科技有限公司","phone":"15810789556","address":"北京市通州区台湖北里24号楼4层432"},
	{"name":"北京致远科技有限公司","phone":"13621013843","address":""},
	{"name":"北京融汇天下支付信息技术有限公司","phone":"18610181112","address":"北京市丰台区西三环南路14号院1号楼710室"},
	{"name":"北京迎光能源科技有限公司","phone":"13502060070","address":"北京市顺义区马坡镇聚源西路17号2幢"},
	{"name":"北京青木数字有限公司","phone":"18612192938","address":"北京大兴区兴创大厦"},
	{"name":"北京麦达数字技术服务有限公司","phone":"18701496256","address":""},
	{"name":"可米隆科技（北京）有限公司","phone":"18910677910","address":"昌平"},
	{"name":"国开财富金融服务外包（北京）有限公司","phone":"13552141568","address":"北京市朝阳区广华居17号楼等3幢内17号楼02层201室内10号"},
	{"name":"奇创网联（北京）有限公司","phone":"15010968773","address":""},
	{"name":"奇创网联（北京）科技有限公司","phone":"13739791761","address":"珠海市横琴新区宝华路6号105室-57746（集中办公区）"},
	{"name":"宁波畅想软件股份有限公司北京分公司","phone":"18501046007","address":""},
	{"name":"宏图众创（北京）科技有限公司","phone":"18911282688","address":"北京市朝阳区常通路龙湖长楹天街西二栋"},
	{"name":"川程在线科技（北京）有限公司","phone":"13716583263","address":"北京市海淀区信息路甲28号12层D座12A-3-011"},
	{"name":"恒智天成（北京）软件技术有限公司","phone":"15373507751","address":"北京市西城区茶马北街1号院2号楼17层2单元2031"},
	{"name":"新乐网络科技(北京)有限公司","phone":"18538000650","address":""},
	{"name":"易米多（北京）网络科技有限公司","phone":"15210120141","address":"北京"},
	{"name":"智云凌飞（北京）科技有限公司","phone":"18911676756","address":"北京市朝阳区呼家楼(京广中心)13层A1373"},
	{"name":"海淀家园工作室","phone":"15010790713","address":""},
	{"name":"环球沃华（北京）软件科技有限公司","phone":"18601942749","address":"北京市海淀区上地十街1号院4号楼8层810"},
	{"name":"环球沃华（软件）科技有限公司","phone":"18766899534","address":"北京朝阳区奥体村天居园"},
	{"name":"百传网传(北京)科技有限公司","phone":"15063679213","address":"北京市朝阳区安华里五区21号楼四层(安贞晟瑞诚孵化器1053号)"},
	{"name":"软鱼科技（深圳）有限公司","phone":"15811498715","address":"深圳市前海深港合作区前湾一路1号A栋201室"},
	{"name":"运动科技（北京）有限公司","phone":"13371767417","address":"北京市海淀区高里掌路1号院23号楼一层F417"},
	{"name":"重庆软件工作室","phone":"15577124210","address":""},
	{"name":"量邦信息科技(北京)有限公司","phone":"13261741602","address":"北京市海淀区中关村大街45号兴发大厦"}
]
db.banner = [
	{url: '/files/banner1.jpg', is_use: 1},
	{url: '/files/banner2.jpg', is_use: 1},
	{url: '/files/banner3.jpg', is_use: 1},
	{url: '/files/banner4.jpg', is_use: 1},
]
module.exports = db
