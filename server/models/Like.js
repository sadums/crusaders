const { Schema, model } = require("mongoose");

const likesSchema = new Schema({
    username: {
      type: String,
      required: true
    },
    pfp: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    preview: {
      type: String,
    }
});

const Like = model("Like", likesSchema);

module.exports = Like;
