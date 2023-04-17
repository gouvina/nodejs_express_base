// Third-party dependencies
const express = require('express');

// Main router object
const router = express.Router();

// User controller methods
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('./user.controller');

// GET /users - Gets list of users
router.get('/', getUser);

// POST /users - Creates a new user
router.post('/', createUser);

// PUT /users - Gets list of users
router.put('/', updateUser);

// DELETE /users - Gets list of users
router.delete('/', deleteUser);

module.exports = router;
