const e = require("express");
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
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

app.get("/", (req, res) => console.log("Hello World!"));

app.listen(port, () => console.log(`Server Open! -> http://localhost:${port}`));

// PS C:\Users\김민후\boiler-plate> git remote add origin https://github.com/minhoo03/boilerplate.git
// PS C:\Users\김민후\boiler-plate> git push origin master --set-upstream
