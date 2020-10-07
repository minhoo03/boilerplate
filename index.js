const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const { User } = require("./models/User");

// application/x-www-form-urlencoded 를 분석해서 가져옴, json type도 분석
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
const { request } = require("express");
mongoose
  .connect(
    "mongodb+srv://gcy:`kimbum1976`@boiler-plate.txkec.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!~"));

app.post("/register", (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면 DB에 넣는다
  const user = new User(request.body);
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
