// server.js
require("dotenv").config(); // Load environment variables from .env file

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialmediaprojectthree",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
// Rest of your server setup
