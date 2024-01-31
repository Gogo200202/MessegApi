const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

import { UserSchema } from "../Models/users";
const User = mongoose.model("User", UserSchema);

async function makeUser(userName: string, email: string, password: string) {
  let hashPassword: string = "";
  await bcrypt
    .hash(password, saltRounds)
    .then((hash: string) => {
      hashPassword = hash;
      // console.log("Hash ", hash);
    })
    .catch((err: { message: string }) => console.error(err.message));
  let user = new User({
    username: userName,
    email: email,
    hash: hashPassword,
  });
  try {
    await user.save();
  } catch (e: any) {
    console.log(e);
  }
}

export { main, makeUser, mongoose, User };
