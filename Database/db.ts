const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  // its good to add password to the connection and not to store it here like this!!!
  await mongoose.connect("mongodb://127.0.0.1:27017/messegapi");
}

import { UserSchema } from "../Models/users";
import { chatSchema } from "../Models/chats";
const User = mongoose.model("User", UserSchema);
const Chat = mongoose.model("Chat", chatSchema);

export { main, mongoose, User, Chat };
