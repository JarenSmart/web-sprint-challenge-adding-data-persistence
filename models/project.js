const db = require("../data/config");

function find() {
  return db("projects");
}

function add(projectData) {
  return db("projects").insert(projectData);
}

module.exports = {
  find,
  add,
};
