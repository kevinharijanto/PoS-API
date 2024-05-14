const userService = require("../user/userService");
const Service = new userService();

class LoginService {
  checkLogin(username, password) {
    console.log(Service.getUsers())
    let userDB = Service.getUsers()
    for (let i = 0; i < userDB.length; i++) {
        if(username === userDB[i].username && password === userDB[i].password){
            return true
        }
    }
  }
}

module.exports = LoginService;