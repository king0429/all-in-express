// 2019 03 21
var express = require('express');
var router = express.Router();


const indexModule = require('../modules/index').index
const chartModule = require('../modules/index').chart
const sqiderModule = require('../modules/index').sqider
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

module.exports = router;