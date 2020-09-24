const route = require("express").Router();

const { db, tasks } = require("../model/db");

route.get("/", (req, res) => {});

route.post("/", async (req, res) => {
  const task = await tasks.create({
    task: req.body.task,
    important: req.body.type,
  });
  res.redirect('/')
});


module.exports = route;
