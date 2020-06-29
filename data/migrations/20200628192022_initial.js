exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .notNull()
      .onUpdate("CASCADE");
    table.text("name").notNull();
    table.text("description");
  });
  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .notNull()
      .onUpdate("CASCADE");
    table.text("notes");
    table.text("description").notNull();
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
