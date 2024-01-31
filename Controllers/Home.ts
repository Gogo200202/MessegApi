var express = require("express");
var router = express.Router();
/* GET home page. */

router.get("/", function (req: any, res: any, next: any) {
  res.json({
    Message: "This api is for authentication and authorization of user",
  });
});

export { router };
