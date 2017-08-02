
exports.seed = knex => knex('comments').del()
  .then(() =>
  knex('comments')
    .insert([
      {
        id: 1,
        entryId: 1,
        comment: 'Halloween is not that great of a movie',
        author: 'Anon',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 2,
        entryId: 1,
        comment: `Halloween is John Carpenter's best film!`,
        author: 'Anon',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      },{
        id: 3,
        entryId: 2,
        comment: `Wait....., Jason is not in this one?`,
        author: 'Anon1',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 4,
        entryId: 4,
        comment: `The funniest movie ever made`,
        author: 'Anon2',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      }, {
        id: 5,
        entryId: 4,
        comment: `Surely, you can't be serious?`,
        author: 'Anon',
        created_at: new Date().toString(),
        updated_at: new Date().toString()
      },
    ])
  );
