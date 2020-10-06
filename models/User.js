const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 7,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // admin || user
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    //   token 유효기간
    type: Number,
  },
});

// User라는 이름으로 감싼다
const User = mongoose.model("User", userSchema);

module.exports = { User };
