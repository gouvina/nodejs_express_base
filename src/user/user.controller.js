// Local dependencies
const userService = require('./user.service');
const { e500 } = require('../_constants/errors');

// Get list of users
exports.getUser = async (req, res, next) => {
  try {
    const users = userService.getUser();
    res.json(users);
  } catch (error) {
    next(e500);
  }
};

// Create new user
exports.createUser = (req, res, next) => {
  try {
    const user = userService.createUser();
    res.json(user);
  } catch (error) {
    next(e500);
  }
};

// Update user based on id
exports.updateUser = async (req, res, next) => {
  try {
    const user = userService.updateUser();
    res.json(user);
  } catch (error) {
    next(e500);
  }
};

// Delete user based on id
exports.deleteUser = async (req, res, next) => {
  try {
    const user = userService.deleteUser();
    res.json(user);
  } catch (error) {
    next(e500);
  }
};