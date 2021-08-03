// Third-party dependencies
const express = require('express');
const router = express.Router();

// User controller methods
const { getUsers, getUserById, postUser } = require('../controllers/userController');

// GET /users - Gets a list of every user
router.get('/', getUsers);

// GET /users/id - Gets an object for the user with id :id
router.get('/:id', getUserById);

// POST /users - Creates a new user
router.post('/', postUser);

module.exports = router;
