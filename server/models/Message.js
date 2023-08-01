const { Schema } = require("mongoose");

const messageSchema = new Schema({
  // user one sent the message
  userOne: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // user two received the message
  userTwo: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = messageSchema