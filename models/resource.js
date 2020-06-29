const db = require("../data/config");

function find() {
  return db("resources");
}

function findById(id) {
  return db("projects").where({ id });
}

function findResources(id) {
  return db("resources as r")
    .innerJoin("projects as p", "p.id", "r.project_id")
    .select("p.name", "r.name", "r.description")
    .where({ project_id: id });
}

function addResource(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  find,
  findResources,
  findById,
  addResource,
};
