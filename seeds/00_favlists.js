
exports.seed = knex => knex('favlists').del()
  .then(() =>
  knex('favlists')
    .insert([
      {
        id: 1,
        name: 'Horror Movies List',
        description: 'The scariest Movies of All Time',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 2,
        name: 'Comedy Movies List',
        description: 'The funniest Movies of All Time',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
        }
    ])
  );
