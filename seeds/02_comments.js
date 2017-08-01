
exports.seed = knex => knex('comments').del()
  .then(() =>
  knex('comments')
    .insert([
      {
        id: 1,
        entryId: 1,
        comment: 'Halloween is not that great of a movie',
        author: 'Anon',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 2,
        entryId: 1,
        comment: `Halloween is John Carpenter's best film!`,
        author: 'Anon',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      },{
        id: 3,
        entryId: 2,
        comment: `Wait....., Jason is not in this one?`,
        author: 'Anon1',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 4,
        entryId: 4,
        comment: `The funniest movie ever made`,
        author: 'Anon2',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 5,
        entryId: 4,
        comment: `Surely, you can't be serious?`,
        author: 'Anon',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      },
    ])
  );
