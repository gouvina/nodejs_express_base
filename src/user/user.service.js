// Local dependencies
const db = require("../_db");
const User = db.User;

// Get list of users
exports.getUser = async () => {
  return [];
};

// Create new user
exports.createUser = async (body) => {
  const user = new User({
    email: body.email,
    password: body.password,
  });
  return await user.save(user);
};

// Update user based on id
exports.updateUser = async () => {
  return {};
};

// Delete user based on id
exports.deleteUser = async () => {
  return {};
};
