const userService = require("../user/userService");
const userController = new userService();

// class LoginService {
//   checkLogin(username, password) {
//     console.log(userController.getUsers())
//     let userDB = userController.getUsers()
//     for (let i = 0; i < userDB.length; i++) {
//         if(username === userDB[i].username && password === userDB[i].password){
//             return true
//         }
//     }
//   }
// }


//get user jadi register user ?
//class jadi register service ?

class RegisterService {
    register(name, username, email, password) {
        console.log(userController.registerUser())
        let userDB = userController.registerUser()
        for (let i = 0; i < userDB.length; i++) {
            if(name === userDB[i].name && username === userDB[i].username && email === userDB[i].email && password === userDB[i].password){
                return true
            }
        }
    }
}

module.exports = RegisterService