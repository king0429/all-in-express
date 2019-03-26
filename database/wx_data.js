// function

// 递增索引
var ondex = 0
var day = 23
var nameIndex = 0
var good_id = 0
const db = {}
const baseUid = 'testUid'
const baseDate = (oos) => {
	let base = 0;
	let defineDate = 28
	oos ? base = oos : base = defineDate
	let randomList = [base - 2, base - 1, base, base + 1, base + 2]
	let showIndex = Math.ceil(Math.random() * 10000 % randomList.length) - 1
	return '2018-07-' + (randomList[showIndex]).toString()
}
const get_random = function (base) {
	if (Math.ceil(Math.random() * 100000 % base) === 0 ) {
		return 2
	}else {
		return Math.ceil(Math.random() * 100000 % base)
	}
}
/**
	发布内容 id索引 
	关联 
	用户id 话题id 日期（年月日）
**/
var sIndex = 0
db.sentence = [
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试1', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 100},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试2', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 101},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试3', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 110},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试4', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 200},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试5', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 200},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试6', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 199},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试7', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 200},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试8', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 200},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试9', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 100},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试10', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 90},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试11', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 100},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试12', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 180},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试13', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 190},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试14', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 490},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试15', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试16', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试17', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试18', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试19', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试20', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试21', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试22', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 320},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试23', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 310},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试24', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试25', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 311},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试26', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试29', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 333},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试30', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试31', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 200},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试32', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试33', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试34', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 281},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试35', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试36', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试37', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试38', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 89},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试39', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试40', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试41', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 120},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试42', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试43', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 222},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试44', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 320},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试45', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试46', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试47', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 312},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试48', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试49', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 30},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试50', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试50', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试50', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试50', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300},
	{id: ++sIndex, content: '测试测试测试测试测试测试测试测试测试测试测试测试测试50', author: '作者用户名', topic_id: ondex++ % 20, good: Math.ceil(Math.random() * 100000 % 64), uid: 'testUid' + String(Math.ceil(Math.random() * 100000 % 6)), date_created: baseDate(), hot: 300}
]

/**
	话题 id索引
	关联
	日期（年月日）
**/ 
db.topic = [
	{id: 1, date: baseDate(), name: '超人来过1', people: '67', total: 1400},
	{id: 2, date: baseDate(), name: '超人来过2', people: '67', total: 1100},
	{id: 3, date: baseDate(), name: '超人来过3', people: '67', total: 1200},
	{id: 4, date: baseDate(), name: '火影忍者4', people: '67', total: 1300},
	{id: 5, date: baseDate(), name: '超人来过5', people: '67', total: 1400},
	{id: 6, date: baseDate(), name: '超人走了6', people: '67', total: 1500},
	{id: 7, date: baseDate(), name: '超人来7', people: '67', total: 1600},
	{id: 8, date: baseDate(), name: '超人来过8', people: '67', total: 1700},
	{id: 9, date: baseDate(), name: '超人来过9', people: '67', total: 1800},
	{id: 10, date: baseDate(), name: '哈哈哈0哈', people: '67', total: 1900},
	{id: 11, date: baseDate(), name: '超人走了11', people: '67', total: 2000},
	{id: 12, date: baseDate(), name: '超人来过12', people: '67', total: 2100},
	{id: 13, date: baseDate(), name: '超人来过13', people: '67', total: 2200},
	{id: 14, date: baseDate(), name: '超人来过14', people: '67', total: 2300},
	{id: 15, date: baseDate(), name: '哈哈哈哈15', people: '67', total: 2400},
	{id: 16, date: baseDate(), name: '超人走了16', people: '67', total: 2500},
	{id: 17, date: baseDate(), name: '超人来过17', people: '67', total: 2600},
	{id: 18, date: baseDate(), name: '超人来过18', people: '67', total: 00},
	{id: 19, date: baseDate(), name: '超人来过19', people: '67', total: 2800},
	{id: 20, date: baseDate(), name: '哈哈哈哈20', people: '67', total: 2900}
]

/**
	看见 id索引 unique日期
	关联
	用户
**/
db.hw = [
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''},
	{author: '作者' + ondex++, content: '这里显示的内容部分，每日固定时间更新' + ondex++ , date: baseDate(), banner: ''}
]

/**
	用户 id索引 uid (token)唯一
	无关联
**/
db.user = [
	{avatar: '', uid: 'testUid', sex: 1, last_login_time: '2018-07-23', province: '北京市', city: '北京市', area: '海淀区', class: '1', info: '个性签名？'}
]
db.good = [
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
	{id: good_id++, sentence_id: get_random(db.sentence.length - 1), uid: baseUid + get_random(6)},
]
var collection_id = 0
db.collection = [
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)},
	{id: collection_id++, uid: baseUid + get_random(5), sentence_id: get_random(db.sentence.length - 1)}
]
module.exports = db;
