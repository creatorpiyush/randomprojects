const express = require("express");

const app = express();

const { db, tasks } = require("./model/db");

const taskroute = require("./routes/task_route");

app.use("/", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/", taskroute);

db.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
