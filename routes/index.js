// 2019 03 21
var express = require('express');
var router = express.Router();

const indexModule = require('../modules/index').index
const chartModule = require('../modules/index').chart
const sqiderModule = require('../modules/index').sqider
// const weiboFileModule = require('../modules/file').weiboFile
// const getBusinessModule = require('../modules/file').getBusiness
const clearTableModule = require('../modules/file').clearTable
const {searchModule, getSearchModule} = require('../modules/search')
const {getLegalperson} = require('../modules/business')
const {getWikiModule, insertWikiModule, getWikeDetail} = require('../modules/wiki')
const {getMessageModule, getMonthModle, getMonthDetailModule}  = require('../modules/messages')
const {getUrlModule, setUrlModule, navigatorModule} = require('../modules/url')
const {getVoteModule, setVoteModule} = require('../modules/vote')
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

// const schema = buildSchema(`
// 		type Query {
// 			hello: String
// 		}
// 	`)

/* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('admin');
// 	// let a = graphqlHTTP({
// 	//   schema: schema,
// 	//   rootValue: global,
// 	//   graphiql: true,
// 	// })
// 	// console.log(req)
//   res.send({Cookie: 123465})
// });

// 首页路由
router.route('/').
	get(indexModule.index_get).
	put(function (req, res) {}).
	post(indexModule.index_post)

// 表格页路由
router.route('/table').get(function (req, res) {
	res.render('table')
})

// 图表页面路由
router.route('/chart')
	.get(chartModule.index_get)

// 爬虫页面路由
router.route('/spider/:id')
	.get(sqiderModule.index)

// 文件存储页面
router.route('/file').get(getSearchModule).post(searchModule)

// 企业信息相关
router.route('/legal_person').get(getLegalperson)

// 使用websockit的 wiki页面
router.route('/wiki').get(getWikiModule).post(insertWikiModule)

// wiki详情
router.route('/wiki/:id').get(getWikeDetail)

// 消息列表分析
router.route('/message').get(getMonthModle).put(getMonthDetailModule)

// 生成短网址网页
router.route('/url').get(getUrlModule).post(setUrlModule)

// 短URL跳转
router.route('/url/:id').get(navigatorModule)

// 投票
router.route('/vote').get(getVoteModule).post(setVoteModule)

module.exports = router;
