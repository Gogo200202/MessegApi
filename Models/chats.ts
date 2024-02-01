var mongoose = require("mongoose");

var chatSchema = new mongoose.Schema(
  {
    userNameOne: String,
    userNameTow: String,
    chat: [
      {
        userSended: String,
        text: String,
        time: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

chatSchema.index({ userNameOne: 1, userNameTow: 1 }, { unique: true });
export { chatSchema };
