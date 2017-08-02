
exports.seed = knex => knex('favlists').del()
  .then(() =>
  knex('favlists')
    .insert([
      {
        id: 1,
        name: 'Horror Movies List',
        description: 'The scariest Movies of All Time',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 2,
        name: 'Comedy Movies List',
        description: 'The funniest Movies of All Time',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
        }
    ])
  );
