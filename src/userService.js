import { User } from "./user.js";
export class UserService {
  constructor() {
    this.users = [];
    this.users.push(new User(1, "Name 1", "email1@example.com"));
    this.users.push(new User(2, "Name 2", "email2@example.com"));
    this.users.push(new User(3, "Name 3", "email3@example.com"));
  }

  getUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  createUser(user) {
    this.users.push(user);
  }

  updateUser(user) {
    this.deleteUser(user.id);
    this.createUser(user);
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
