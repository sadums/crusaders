const { Schema } = require("mongoose");

const messageSchema = new Schema(
  {
    // user who sent the message
    username: {
      type: Schema.Types.String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
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

module.exports = messageSchema;
