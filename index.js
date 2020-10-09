const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { User } = require("./models/User");
const config = require("./config/key");

// application/x-www-form-urlencoded 를 분석해서 가져옴, json type도 분석
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~"));

app.post("/register", (req, res) => {
  // signup시 날아온 모델 요청을 DB에 담음
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Server Open! -> http://localhost:${port}`));

// PS C:\Users\김민후\boiler-plate> git remote add origin https://github.com/minhoo03/boilerplate.git
// PS C:\Users\김민후\boiler-plate> git push origin master --set-upstream
