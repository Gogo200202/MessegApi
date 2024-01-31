var express = require("express");
var router = express.Router();

const Db = require("../Database/db");
/* GET home page. */

const createUser = router.post(
  "/createUser",
  function (req: any, res: any, next: any) {
    let user = req.body;

    async function createUser() {
      let response = await Db.makeUser(
        user.username,
        user.email,
        user.password
      );
      if (!response) {
        res.json({ BadRequest: 400 });
      } else {
        res.json({ ok: 200 });
      }
    }
    createUser();
  }
);

export { createUser };
