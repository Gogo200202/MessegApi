"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var router = express.Router();
exports.router = router;
/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ test: 5 });
});
//# sourceMappingURL=Home.js.map