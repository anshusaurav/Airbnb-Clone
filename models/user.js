const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    trim: true,
    index: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true

  },
  countryCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  favouriteMovies: [{ type: String }],
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema, "users");

