// Third-party dependencies
const express = require('express');

// Main router object
const router = express.Router();

// User controller methods
const {
  getUser,
  postUser,
} = require('../controllers/user.controller');

// GET /users - Gets list of users
router.get('/', getUser);

// POST /users - Creates a new user
router.post('/', postUser);

module.exports = router;
