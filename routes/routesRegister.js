var express = require('express');
var router = express.Router();
var registerController = require('../register/registerController');

// GET Home Page
// router.get('/', function(req, res, next) {
//   res.render('login');
// });

router.route('/')
    // SHOW REGISTER PAGE
    // .get(registerController.showRegister)

    // REGISTER
    .post(registerController.addUser)

module.exports = router;