const userService = require("../user/userService");
const Service = new userService();

const addUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        res.status(201).json(await Service.addUser({name, email, password}));
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addUser
};