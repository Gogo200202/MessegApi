const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messegapi");
}

import { UserSchema } from "../Models/users";
const User = mongoose.model("User", UserSchema);

export { main, mongoose, User };
