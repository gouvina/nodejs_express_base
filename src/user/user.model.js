module.exports = mongoose => {
  const users = mongoose.model(
    "users",
    mongoose.Schema(
      {
        email: String,
        password: String,
        _token: String,
        _logged: Date,
        _created: Date,
        _updated: Date,
        _archived: Boolean,
      },
      { timestamps: true }
    )
  );

  return users;
};