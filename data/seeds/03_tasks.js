exports.seed = async function (knex) {
  await knex("tasks").insert([
    {
      project_id: 1,
      notes: "Finish school",
      description: "Take it all in",
      completed: false,
    },
    {
      project_id: 3,
      notes: "If this works, I'll be thrilled",
      description: "Please, seriously",
      completed: true,
    },
  ]);
};
