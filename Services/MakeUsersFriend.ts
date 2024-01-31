const chat = require("../Database/db");

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

export { makeUsersFriend };
