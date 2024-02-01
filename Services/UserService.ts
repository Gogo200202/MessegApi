const chat = require("../Database/db");
const database = require("../Database/db");
const Db = require("../Database/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function createUser(user): Promise<boolean> {
  async function makeUser(
    userName: string,
    email: string,
    password: string
  ): Promise<boolean> {
    let response = true;
    let hashPassword: string = "";
    await bcrypt
      .hash(password, saltRounds)
      .then((hash: string) => {
        hashPassword = hash;
        // console.log("Hash ", hash);
      })
      .catch((err: { message: string }) => console.error(err.message));
    let user = new Db.User({
      username: userName,
      email: email,
      hash: hashPassword,
    });
    try {
      await user.save();
    } catch (e: any) {
      response = false;
      console.log(e);
    }
    return response;
  }

  let response = await makeUser(user.username, user.email, user.password);
  return response;
}

async function makeUsersFriend(
  userNameOne: string,
  userNameTow: string
): Promise<boolean> {
  let friendChat = new chat.Chat({
    userNameOne: userNameOne,
    userNameTow: userNameTow,
  });
  try {
    await friendChat.save();
  } catch (err) {
    return false;
  }
  return true;
}

async function ValidateUser(
  userName: string,
  password: string
): Promise<boolean> {
  let result = await database.User.findOne({ username: userName });
  if (result == null) {
    return false;
  }

  let isValid = await bcrypt.compare(password, result._doc.hash);

  return isValid;
}

export { createUser, makeUsersFriend, ValidateUser };
