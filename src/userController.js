import { UserService } from "./userService.js";

export class UserController {
  constructor() {
    this.userService = new UserService();
  }

  getAllUsers(req, res) {
    const users = this.userService.getUsers();
    res.send(users);
  }

  getUser(req, res) {
    const { id } = req.params;
    const user = this.userService.getUserById(parseInt(id));
    res.send(user);
  }

  addUser(req, res) {
    const { body } = req;
    this.userService.createUser(body);
    res.status(201).send();
  }

  editUser(req, res) {
    const { body } = req;
    this.userService.updateUser(body);
    res.status(204).send();
  }

  removeUser(req, res) {
    const { id } = req.params;
    this.userService.deleteUser(parseInt(id));
    res.status(204).send();
  }
}
