const express = require("express");
const session = require("express-session");

const port = process.env.PORT || 5555;

const app = express();

app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use("/", express.static(__dirname + "./src/public"));
app.use(express.urlencoded({ urlencoded: true }));
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index", { doc: `Meme Page` });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
