
exports.seed = knex => knex('entries').del()
  .then(() =>
  knex('entries')
    .insert([
      {
        id: 1,
        favlistId: 1,
        sourceId: 1,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      },{
        id: 2,
        favlistId: 1,
        sourceId: 5676,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      },{
        id: 3,
        favlistId: 1,
        sourceId: 908,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 4,
        favlistId: 2,
        sourceId: 789,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 5,
        favlistId: 2,
        sourceId: 456,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 6,
        favlistId: 2,
        sourceId: 123,
        votes: 0,
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      },
    ])
  );
