// * npm packages
const express = require("express");
const session = require("express-session");

// ****

const app = express();

// * routes('./src/routes')
const indexroute = require("./src/routes/index");

// *****

app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use("/", express.static(__dirname + "/src/public"));
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

// * express-session

// *******

// * dynamics
app.get("/", indexroute);

// *******

// * port
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// *******
