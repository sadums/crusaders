const { Schema } = require("mongoose");

const hashtagSchema = new Schema({
  hashtagText: {
    type: String,
    required: true,
  },
  catagory: { //for if we want to do "view similar hashtags" or something
    type: String,
  },
});

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hashtags: [hashtagSchema],
});

module.exports = postSchema