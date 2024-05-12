const userService = require("../user/userService");

const userController = new userService();

const getUsers = (req, res) => {
  res.send(userController.getUsers());
};

// const addUser = (req, res) => {
//     const { name, email, username, password } = req.body;

//     const addUser = userController.addUser({name, email, username, password});
//     if(!addUser) {
//         res.status(400).send({message: "User not added"});
//     }

//     res.send({message: "User added"})
// };

const deleteUser = (req, res) => {
    const { id } = req.params;
    const deleteData = userController.deletedUserById(id);
    if (!deleteData) {
        res.status(404).send ({ message: "User not found"});
        return;
    }
    res.send({ message: "User deleted"});
};

const getUserById = (req, res) => {
    const { id } =req.params;
    const user = userController.getUserById(id);
    if (!user) {
        res.status(404).send({ message: "User not found"});
        return;
    }
    res.send(user);
};

const editUserById =(req, res) => {
    const { id } = req.params;
    const { name, email, username, password} = req.body;

    const editUser = editController.editUserById (id, {
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
    addUser,
    deleteUser,
    getUserById,
    editUserById,
};