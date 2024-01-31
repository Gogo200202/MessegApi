"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.mongoose = exports.makeUser = exports.main = void 0;
const mongoose = require("mongoose");
exports.mongoose = mongoose;
const bcrypt = require("bcrypt");
const saltRounds = 10;
main().catch((err) => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect("mongodb://127.0.0.1:27017/test");
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    });
}
exports.main = main;
const users_1 = require("../Models/users");
const User = mongoose.model("User", users_1.UserSchema);
exports.User = User;
function makeUser(userName, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let hashPassword = "";
        yield bcrypt
            .hash(password, saltRounds)
            .then((hash) => {
            hashPassword = hash;
            //console.log("Hash ", hash);
        })
            .catch((err) => console.error(err.message));
        let user = new User({
            username: userName,
            email: email,
            hash: hashPassword,
        });
        yield user.save();
    });
}
exports.makeUser = makeUser;
//# sourceMappingURL=db.js.map