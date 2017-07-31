
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  },
  migrations: {
      tableName: 'knex_migrations'
    }
});

module.exports = knex;
