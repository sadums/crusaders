const { Schema } = require("mongoose");

const hashtagSchema = new Schema({
  hashtagText: {
    type: String,
    //required: true,
  },
  category: { //for if we want to do "view similar hashtags" or something
    type: String,
  },
});

const commentSchema = new Schema({
  body: {
    type: String,
    //required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
  image: {
    type: String,
  },
  video: {
    type: String,
  },
  title: {
    type: String,
    //required: true,
  },
  body: {
    type: String,
  },
  comments: {
    type: [commentSchema]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  hashtags: [hashtagSchema],
});

module.exports = postSchema