const userService = require("../user/userService");
const userController = new userService();

class LoginService {
  checkLogin(username, password) {
    console.log(userController.getUsers())
    let userDB = userController.getUsers()
    for (let i = 0; i < userDB.length; i++) {
        if(username === userDB[i].username && password === userDB[i].password){
            return true
        }
    }
  }
}

module.exports = LoginService;