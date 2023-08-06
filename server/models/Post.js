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
  username: {
    type: String,
  }
})

// const Image = new Schema({
//   cropped: String,
//   original: String,
// });

// const Video = new Schema({
//   thumbnail: String,
//   video: String,
// });

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
  preview: {
    type: String,
  },
  media: {
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