const { Schema, model } = require("mongoose");
const Message = require("./Message");

const chatSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [Message],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Chat = model("Chat", chatSchema);

module.exports = Chat;





