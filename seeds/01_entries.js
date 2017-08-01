
exports.seed = knex => knex('entries').del()
  .then(() =>
  knex('entries')
    .insert([
      {
        id: 1,
        favlistId: 1,
        name: 'Halloween',
        description: 'The classic John Carpenter Film',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      },{
        id: 2,
        favlistId: 1,
        name: 'Friday the 13th',
        description: 'The one without Jason',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      },{
        id: 3,
        favlistId: 1,
        name: 'Poltergeist',
        description: 'A Film about a snarky ghost',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 4,
        favlistId: 2,
        name: 'Airplane!',
        description: 'The best parady film',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 5,
        favlistId: 2,
        name: 'Monty Python and the Holy Grail',
        description: 'A true classic',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      }, {
        id: 6,
        favlistId: 2,
        name: 'Anchorman',
        description: 'Stay Classy San Diego',
        created_at: new Date('2017-07-31 12:12:12 UTC'),
        updated_at: new Date('2017-07-31 12:12:12 UTC')
      },
    ])
  );
