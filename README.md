# User API Demo in ExpressJS

This is a simple REST API demo that allows you to create, read, update, and delete user data. It is built using [Express.js](https://expressjs.com/), a popular Node.js web framework.

## Files

The project has the following files:

- `src/app.js`: The main file that sets up the Express.js server and defines the API routes.
- `src/user.js`: The data model that represents a user.
- `src/userController.js`: The controller that handles user requests and interacts with the `userService.js` file.
- `src/userService.js`: The service that provides CRUD (Create, Read, Update, Delete) operations for the user data.

## API Endpoints

The API provides the following endpoints:

- `GET /users`: Get all users.
- `GET /users/:id`: Get a user by ID.
- `POST /users`: Create a new user.
- `PATCH /users/:id`: Update an existing user.
- `DELETE /users/:id`: Delete a user by ID.
