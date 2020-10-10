const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const saltRounds = 10;

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

userSchema.pre("save", function(next) {
  var user = this;
  
  if (user.isModified("password")) {
    //비밀번호 암호화 시킨다
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// 이 DB table을 User라는 이름으로 감싼다
const User = mongoose.model("User", userSchema);

module.exports = { User };
