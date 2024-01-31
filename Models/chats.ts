import test from "node:test";

var mongoose = require("mongoose");

var chatSchema = new mongoose.Schema(
  {
    userNameOne: String,
    userNameTow: String,
    chat: [{ text: String }],
  },
  { timestamps: true }
);

chatSchema.index({ userNameOne: 1, userNameTow: 1 }, { unique: true });
export { chatSchema };
