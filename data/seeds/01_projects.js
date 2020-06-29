exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Learn some stuff",
      description: "Data persistence is interesting",
      completed: true,
    },
    {
      name: "Have a sandwich",
      description: "It's a korean inspired egg, ham, and cheese",
      completed: false,
    },
    {
      name: "3rd unnamed project",
      description: "Please just work how I want",
      completed: false,
    },
  ]);
};
