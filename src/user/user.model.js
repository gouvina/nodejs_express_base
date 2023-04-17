module.exports = mongoose => {
  const User = mongoose.model(
    "users",
    mongoose.Schema(
      {
        email: {
          type: String,
          unique: true,
        },
        password: {
          type: String,
        },
        _token: {
          type: String,
          default: '',
        },
        _archived: {
          type: Boolean,
          default: false,
        },
        _loggedAt: Date,
      },
      { timestamps: true }
    )
  );

  return User;
};