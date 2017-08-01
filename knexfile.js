
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    },
    migrations: {
        tableName: 'knex_migrations'
      }
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    },
    migrations: {
        tableName: 'knex_migrations'
      }
  },
};
