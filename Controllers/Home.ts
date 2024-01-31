var express = require("express");
var router = express.Router();
const jwt = require("../utils/jwt");

router.get("/", jwt.verifyToken, function (req: any, res: any, next: any) {
  res.json({
    Message: "This api is for authentication and authorization of user",
  });
});

export { router };
