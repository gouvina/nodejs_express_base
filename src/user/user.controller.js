// Local dependencies
const userService = require('./user.service');
const { e400, e500 } = require('../_constants/errors');

// Get list of users
exports.getUsers = async (req, res, next) => {
  try {
    // Fetch all users from DB
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next({ ...e500, message: error });
  }
};

// Create new user
exports.createUser = async (req, res, next) => {
  try {
    // Validate request body
    if (
      !req.body.email || 
      !req.body.password
    ) next(e400);

    // Create user after validation and return result
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (error) {
    next({ ...e500, message: error });
  }
};

// Get specific user based on id
exports.getUser = async (req, res, next) => {
  try {
    // Get id from params
    const id = req.params.id;

    // Validate request params
    if (!id) next(e400);

    // Fetch user from DB and return result
    const user = await userService.getUser(id);
    res.json(user);
  } catch (error) {
    next({ ...e500, message: error });
  }
};

// Update user based on id
exports.updateUser = async (req, res, next) => {
  try {
    // Get id from params
    const id = req.params.id;

    // Validate request params
    if (!id) next(e400);

    // Validate request body
    if (
      !req.body.email || 
      !req.body.password
    ) next(e400);

    // Update user after validation and return result
    const user = await userService.updateUser(id, req.body);
    res.json(user);
  } catch (error) {
    next({ ...e500, message: error });
  }
};

// Delete user based on id
exports.deleteUser = async (req, res, next) => {
  try {
    // Get id from params
    const id = req.params.id;

    // Validate request params
    if (!id) next(e400);

    // Delete user after validation and return result
    const user = await userService.deleteUser(id);
    res.json(user);
  } catch (error) {
    next({ ...e500, message: error });
  }
};