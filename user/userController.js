const userService = require("../user/userService");
const Service = new userService();

const getUsers = async (req, res) => {
    try {
        res.status(200).json(await Service.getUsers());
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await Service.getUserById(id));
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        let status = await Service.deletedUserById(id);
        res.status(200).send(`User deleted with ID: ${id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

const editUserById = async (req, res) => {
    const { id } = req.params;
    // const { user_name, user_email, user_password } = req.body;

    try {
        let status = await  Service.editUserById (id, req.body);
        res.status(200).send(`User edited with ID: ${id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getUsers,
    deleteUser,
    getUserById,
    editUserById,
};