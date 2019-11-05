// Local dependencies
const { e500 } = require('../constants/Errors');

// Get list of users
exports.getUsers = async (req, res, next) => {
  try {
    res.json([]);
  } catch (error) {
    next(e500);
  }
};

// Get user by id
exports.getUserById = (req, res, next) => {
  try {
    const uid = req.params.id
    res.json({ 'id': uid });
  } catch (error) {
    next(e500);
  }
};

// Post new user generating uuid
exports.postUser = (req, res, next) => {
  try {
    res.json({});
  } catch (error) {
    next(e500);
  }
};