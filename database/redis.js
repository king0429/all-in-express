var redis = require('redis')
// redis 缓存
const client = redis.createClient()
// redis 链接错误
client.on("error", function(error) {
  console.log(error)
})

module.exports = client
