// Local dependencies
const userService = require('./user.service');
const { e400, e500 } = require('../_constants/errors');

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
exports.createUser = async (req, res, next) => {
  try {
    // Validate request
    if (
      !req.body.email || 
      !req.body.password
    ) next(e400);

    // Create user after validation and return result
    const user = await userService.createUser(req.body);
    console.log(user);
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