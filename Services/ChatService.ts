const Chat = require("../Database/db");

async function userTextOtherUser(
  userNameOne: string,
  userNameTow: string,
  text: string
) {
  let currentChat = await Chat.Chat.findOne({
    userNameOne: userNameOne,
    userNameTow: userNameTow,
  });
  if (currentChat == null) {
    currentChat = await Chat.Chat.findOne({
      userNameOne: userNameTow,
      userNameTow: userNameOne,
    });
  }
  currentChat.chat.push({ userSended: userNameOne, text: text });

  try {
    currentChat.save();
  } catch (err) {
    return false;
  }
  return true;
}
async function GetUserOneAndUserTowChat() {}

export { userTextOtherUser, GetUserOneAndUserTowChat };
