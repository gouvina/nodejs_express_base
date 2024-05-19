// Third-party dependencies
const express = require('express');

// Main router object
const router = express.Router();

// User controller methods
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller');

// GET /users - Gets list of users
router.get('/', getUsers);

// POST /users - Creates a new user
router.post('/', createUser);

// GET /users/:id - Gets list of users
router.get('/:id', getUser);

// PUT /users/id - Gets list of users
router.put('/:id', updateUser);

// DELETE /users/id - Gets list of users
router.delete('/:id', deleteUser);

module.exports = router;
