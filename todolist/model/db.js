const sequelize = require("sequelize");

const db = new sequelize({
  dialect: "sqlite",
  storage: __dirname + "/tasks.db",
});

const Datatype = sequelize.DataTypes;

const tasks = db.define("task", {
  id: {
    type: Datatype.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  task: {
    type: Datatype.STRING,
    // allowNull: false,
  },

  normal: {
    type: Datatype.STRING,
    defaultValue: true,
  },

  important: {
    type: Datatype.STRING,
  },
});

// db.authenticate().then(() => {
//   console.log("Connection worked");
// });

module.exports = {
  db,
  tasks,
};
