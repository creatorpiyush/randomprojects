// * npm packages
const express = require("express");
const session = require("express-session");

const addmeme = require("./src/db/db");

// ****

const app = express();

// * routes('./src/routes')
const indexroute = require("./src/routes/index");
const memedb = require("./src/routes/cardsdb");

// *****

// * front-end linking and post handling
app.set("view engine", "hbs");
app.set("views", "./src/public/components");
app.use("/", express.static(__dirname + "/src/public"));
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());

// * express-session

// *******

// * dynamics
app.use("/", indexroute);

app.use("/memeadd", memedb);

// *******

// * port
const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
// *******
