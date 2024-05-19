// Local dependencies
const { e400, e500 } = require('../_constants/errors');

// Get list of users
exports.getUser = async (req, res, next) => {
  try {
    res.json([]);
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
    const user = { email: req.body.email, password: req.body.password }
    res.json(user);
  } catch (error) {
    next(e500);
  }
};
