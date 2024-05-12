const User = require("./user");

class UserService {
  constructor() {
    this.users = [
     new User(1, "Dije", "dwina147@gmail.com", "dwinay", "fafifu123"),
     new User(2, "Nane", "nanea@gmail.com", "naneags", "hadeh123"),
     new User(3, "Ilyas", "ilyasas@gmail.com","ilyas25","kopasus123"),
    ];
  }

    getUserById(id) {
    const user = this.users.find(user => user.id === userId);
    return user || null;
    }

    addUser({ name, email, username, password }) {
    const id = this.employees.length + 1;
    const user = new User(id, name, age, salary, username, password);
    this.user.push(user);
    console.log("add: ", user.id, user.name);
    return true;
    }

    // addUser( name, email, username, password) {
    // const id = this.employees.length ++;
    // const newUser = new User(id, name, email, username, password);
    // this.user.push(newUser);
    // return newUser;
    // }

    editUserById(id, { name, email, username, password }) {
        console.log("edit: ", id);
        const user = this.getUserById(id);
        if (!user) {
           console.log("User not found");
          return false;
        }
        user.name = name;
        user.email = email;
        user.username = salary;
        user.password = username;
        user.password = password;
        console.log("edited: ", user);
        return true;
      }

    deletedUserById(id) {
        console.log("delete", id);
        const initialLength = this.users.length;
        this.users = this.employees.filter((user) => user.id != id);
        const isDeleted = this.users.length < initialLength;
        if (isDeleted) {
            console.log("User deleted succesfully");
        } else {
            console.log("Failed to delete user. User not found.");
        }
    }
}

    module.exports = UserService;
