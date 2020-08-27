const route = require("express").Router();
const multer = require("multer");
const fs = require("fs").promises;

const addmeme = require("../db/db");

// * images upload
const upload = multer({ dest: "src/uploads/" });

app.use("/images", express.static(__dirname + "/images"));

route.post("/", (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);
  const temp = new addmeme({
    memetitle: req.body.title,
  });

  temp.save((err, result) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

module.exports = route;
