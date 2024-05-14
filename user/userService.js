const User = require("./user");
const db = require('../db');

class UserService {

    async getUsers() {
      const result = await db.query('SELECT * FROM users');
      return result.rows;
    } 

    async getUserById(id) {
      const result = await db.query('SELECT * FROM users WHERE user_id = $1', [id])
      return result.rows;
    //   const user = this.users.find(user => user.id == id);
    // return user || null;
    }

    async addUser({ name, email, password }) {
      const result = await db.query('INSERT INTO users (user_id, user_name, user_email ,user_password, created_at, updated_at) VALUES (DEFAULT, $1, $2, $3, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP) RETURNING *', [name, email,password])
      return result.rows;
    }

    async deletedUserById(id) {
        const result = await db.query ('DELETE FROM users WHERE user_id = $1', [id])
        // return result.rows
    }

    async editUserById(id, { name, email, password }) {
        const result = await db.query ('UPDATE users SET user_name = $1, user_email = $2, user_password = $3 WHERE user_id = $4', [name, email, password, id])
    }
}

    module.exports = UserService;
