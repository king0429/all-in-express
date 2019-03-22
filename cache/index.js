var session = require("express-session")
var NedbStore = require('nedb-session-store')( session );
const sessionMiddleware = session({
  secret: "fas fas",
  resave: false,
  saveUninitialized: false,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 365 * 24 * 60 * 60 * 1000   // e.g. 1 year
  },
  // store: new NedbStore({
  //   filename: '1e.db'
  // })
})
module.exports = sessionMiddleware
