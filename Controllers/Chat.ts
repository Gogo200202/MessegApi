let express = require("express");
let router = express.Router();
const chatService = require("../Services/ChatService");
const jwt = require("../utils/jwt");

const userOneTextUserTow = router.post(
  "/UserOneTextUserTow",
  jwt.verifyToken,
  async function (req: any, res: any, next: any) {
    const { userOne, userTow, text } = req.body;
    // the first user in function he sending the message
    let result = await chatService.userTextOtherUser(userOne, userTow, text);
    if (result) {
      res.json({ ok: 200 });
    } else {
      res.json({ badRequest: 400 });
    }
  }
);
export { userOneTextUserTow };
