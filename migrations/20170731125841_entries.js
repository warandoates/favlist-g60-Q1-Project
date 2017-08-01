
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', (table) => {
  table.increments('id').primary();
  table.integer('favlistId').references('id').inTable('favlists')
    .notNullable().onDelete('cascade');
  table.string('name').notNullable().defaultTo('');
  table.string('description').notNullable().defaultTo('');
  table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
