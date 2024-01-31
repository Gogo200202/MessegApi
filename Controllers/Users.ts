var express = require("express");
var router = express.Router();
let CreateUserService = require("../Services/CreateUser");
let validateUserService = require("../Services/validateUser");

const createUser = router.post(
  "/createUser",
  async function (req: any, res: any, next: any) {
    let user = req.body;

    let response = await CreateUserService.createUser(user);
    if (response) {
      res.json({ ok: 200 });
    } else {
      res.json({ BadRequest: 400 });
    }
  }
);

const validateUser = router.post(
  "/validateUser",
  async function (req: any, res: any, next: any) {
    let user = req.body;

    let response: boolean = await validateUserService.ValidateUser(
      user.username,
      user.password
    );
    if (response) {
      res.json({ ok: 200 });
    } else {
      res.json({ BadRequest: 400 });
    }
  }
);

export { createUser, validateUser };
