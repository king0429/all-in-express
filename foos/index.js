class User {
  constructor (id, name) {
    this.id = id
    this.name = name
  }
  updateLogTime () {
    let now = new Date().getTIme()
    return now
  }
  setLogIp (req) {
    return req.IP;
  }
}

module.exports = User
