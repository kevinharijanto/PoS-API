const LoginService = require("../Login/loginService");

const loginController = new LoginService();

const showLogin = (req, res) => {
    res.render('login');
};

const logMeIn = (req, res) => {
  if(loginController.checkLogin(req.body.username,req.body.password) == true) {
    res.send(`Username: ${req.body.username} Password: ${req.body.password}`);
  } else {
    res.status(404).json({code: 404,status:"404 not found"})
  }
};

module.exports = {
    showLogin,
    logMeIn
};