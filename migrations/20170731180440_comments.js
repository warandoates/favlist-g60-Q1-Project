
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
  table.increments('id').primary();
  table.integer('entryId').references('id').inTable('entries')
    .notNullable().onDelete('cascade');
  table.string('comment').notNullable().defaultTo('');
  table.string('author').notNullable().defaultTo('');
  table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
