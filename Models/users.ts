var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: String,
    bio: String,
    image: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);
export { UserSchema };
