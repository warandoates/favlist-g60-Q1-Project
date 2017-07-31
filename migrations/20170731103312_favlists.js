
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favlists', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favlists');
};
