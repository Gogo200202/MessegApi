let express = require("express");
let router = express.Router();
let CreateUserService = require("../Services/UserService");
let validateUserService = require("../Services/UserService");
let jwt = require("../utils/jwt");
let makeUsersFriendService = require("../Services/UserService");
const register = router.post(
  "/register",
  async function (req: any, res: any, next: any) {
    let user = req.body;

    let response = await CreateUserService.createUser(user);
    if (response) {
      res.status(200).json({ ok: 200 });
    } else {
      res.status(400).json({ BadRequest: 400 });
    }
  }
);

const login = router.post(
  "/login",
  async function (req: any, res: any, next: any) {
    let user = req.body;

    let response: boolean = await validateUserService.ValidateUser(
      user.username,
      user.password
    );
    if (response) {
      let token = jwt.generateJwt(user.username);
      res.status(200).json({ token });
    } else {
      res.status(400).json({ BadRequest: 400 });
    }
  }
);
// its going to be more secure if use userId
const makeUsersFriends = router.post(
  "/makeUsersFriends",
  async function (req: any, res: any, next: any) {
    let users = req.body;

    let response: boolean = await makeUsersFriendService.makeUsersFriend(
      users.userOne,
      users.userTow
    );
    if (response) {
      res.status(200).json({ ok: 200 });
    } else {
      res.status(400).json({ BadRequest: 400 });
    }
  }
);

export { register, login, makeUsersFriends };
