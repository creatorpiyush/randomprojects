const route = require("express").Router();

const { db, tasks } = require("../model/db");

route.get("/", (req, res) => {
  res.render("index");
});

route.post("/", async (req, res) => {
  if (req.body.task == "") {
    return res.render("index", { err: "Task is Required" });
  } else {
    const task = await tasks.create({
      task: req.body.task,
      important: req.body.type,
    });
    res.redirect("/");
  }
});

route.get("/tasks", async (req, res) => {
  const task = await tasks.findAll();
  res.status(200).send(task);
});

module.exports = route;
