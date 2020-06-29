const db = require("../data/config");

function find() {
  return db("tasks");
}

function findById(id) {
  return db("projects").where({ id });
}

function findTasks(id) {
  return db("tasks as t")
    .innerJoin("projects as p", "p.id", "t.project_id")
    .select(
      "p.name as project name",
      "p.description as project description",
      "t.notes",
      "t.description"
    )
    .where({ project_id: id });
}

function addTask(task) {
  return db("tasks").insert(task);
}

module.exports = {
  find,
  findById,
  findTasks,
  addTask,
};
