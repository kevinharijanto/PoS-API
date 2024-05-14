const userService = require("../user/userService");

const userController = new userService();

// const registerController = new registerService();

// const showRegister = (req, res) => {
//     res.render('Register');
// };

const addUser = (req, res) => {
    const { name, email, username, password } = req.body;

    const addUser = registerController.addUser({name, email, username, password});
    if(!addUser) {
        res.status(400).send({message: "User not added"});
    }

    res.send({message: "User added"})
};

module.exports = registerController;