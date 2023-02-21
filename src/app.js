import express from "express";
import bodyParser from "body-parser";
import { UserController } from "./userController.js";

const app = express(); // create a new server
app.use(bodyParser.json()); //install json parsing

const userController = new UserController();
// controller mapping, similar to servlet mapping in java servlet
app.get("/users", (req, res) => userController.getAllUsers(req, res));
app.get("/users/:id", (req, res) => userController.getUser(req, res));
app.post("/users", (req, res) => userController.addUser(req, res));
app.patch("/users/:id", (req, res) => userController.editUser(req, res));
app.delete("/users/:id", (req, res) => userController.removeUser(req, res));

//listen means to start the server
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
