var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var logger = require('morgan');
var sesstion = require('./cache/index.js')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/wx_api');
var adminRouter = require('./routes/admin');

// var socketURL = require('./routes/socket')

// graphQL
// var { buildSchema } = require('graphql');
// var graphqlHTTP = require('express-graphql');
//
// console.log(graphqlHTTP)

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 简历模型
// var schema = buildSchema(`
//   type Query {
//     hello: String,
//     name: String
//   }
// `);

// const root = {
// 	hello: () => 'hello graphQL',
// 	name: (e) => {
// 		let str = ''
// 		e ? str = e : str = {e: null}
// 		return str
// 	}
// }
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser())
app.use(express.static(path.join(__dirname, 'public')));
app.use(sesstion)

app.use('/', indexRouter);
app.use('/wx_api', usersRouter);
app.use('/admin', adminRouter);

// app.use('/socket', socketURL)

// app.use('/', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
//   methid: 'POST'
// }));
// app.use('/', indexRouter)
// app.use('/wx_api', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
