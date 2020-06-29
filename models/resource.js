const db = require("../data/config");

function findById(id) {
  return db("projects").where({ id });
}

function findResources(id) {
  return db("resources")
    .innerJoin("projects as p", "p.id", "resources.project_id")
    .select("p.name", "resources.name", "resources.description")
    .where({ project_id: id });
}

function addResource(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  findResources,
  findById,
  addResource,
};
