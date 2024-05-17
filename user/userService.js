// const User = require("../sequelize/models/user");
const { models } = require('../sequelize');
const db = require('../db');

class UserService {

    async getUsers() {
      // const result = await db.query('SELECT * FROM users');
      const result = await models.users.findAll();
      return result;
    } 

    async getUserById(id) {
      // const result = await db.query('SELECT * FROM users WHERE user_id = $1', [id])
      const result = await models.users.findByPk(id)
      return result;
    //   const user = this.users.find(user => user.id == id);
    // return user || null;
    }

    async addUser(body) {
      // const result = await db.query('INSERT INTO users (user_id, user_name, user_email ,user_password, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP) RETURNING *', [name, email,password])
      // return result.rows;
      await models.users.create(body)
    }

    async deletedUserById(id) {
        // const result = await db.query ('DELETE FROM users WHERE user_id = $1', [id])
        await models.users.destroy({
          where: {user_id:id}
        })
        // return result.rows
    }

    async editUserById(id, body) {
        // const result = await db.query ('UPDATE users SET user_name = $1, user_email = $2, user_password = $3 WHERE user_id = $4', [name, email, password, id])
        await models.users.update(body, {
          where: {user_id: id}
        });
    }
}

    module.exports = UserService;
