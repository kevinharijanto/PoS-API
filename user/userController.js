const userService = require("../user/userService");

const Service = new userService();

const getUsers = async (req, res) => {
    console.log(Service.getUsers());
//   res.send(Service.getUsers());
    // res.json(Service.getUsers());
//   res.json(result.rows);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const deleteData = Service.deletedUserById(id);
    if (!deleteData) {
        res.status(404).send ({ message: "User not found"});
        return;
    }
    res.send({ message: "User deleted"});
};

const getUserById = (req, res) => {
    const { id } =req.params;
    const user = Service.getUserById(id);
    if (!user) {
        res.status(404).send({ message: "User not found"});
        return;
    }
    res.send(user);
};

const editUserById =(req, res) => {
    const { id } = req.params;
    const { name, email, username, password} = req.body;

    const editUser = Service.editUserById (id, {
        name,
        email,
        username,
        password,
    });
    if (!editUser) {
        res.status(400).send ({ message: "User not edited"});
        return;
    }

    res.send({ message: "User edited"});

};

module.exports = {
    getUsers,
    deleteUser,
    getUserById,
    editUserById,
};