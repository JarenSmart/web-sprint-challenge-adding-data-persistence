exports.seed = async function (knex) {
  await knex("resources").insert([
    {
      project_id: 1,
      name: "Lambda TK",
      description: "A great learning tool",
    },
    {
      project_id: 2,
      name: "Eggs and stuff are in the fridge",
      description: "These are the components of the sandwich",
    },
  ]);
};
