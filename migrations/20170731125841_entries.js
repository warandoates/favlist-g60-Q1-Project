
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', (table) => {
  table.increments('id').primary();
  table.integer('favlistId').references('id').inTable('favlists')
    .notNullable().onDelete('cascade');
  table.integer('sourceId').notNullable().defaultTo(0);
  table.integer('votes').notNullable().defaultTo(0);
  table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
