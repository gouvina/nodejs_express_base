// Local dependencies
const { e500 } = require('../constants/errors');

// Get list of users
exports.getUser = async (req, res, next) => {
  try {
    res.json([]);
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