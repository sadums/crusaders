const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  // user who sent the message
  author: {
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
},
  {
    toJSON: {
      virtuals: true,
    },
  });



module.exports = messageSchema;