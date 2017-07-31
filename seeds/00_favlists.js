exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('favlists').del()
        .then(()  => {
            return Promise.all([
                // Inserts seed entries
                knex('favlists').insert({
                    id: 1,
                    name: 'Horror Movies List',
                    created_at: Date.now(),
                    updated_at: Date.now()
                }),
            ]);
        })
        // .then(() => knex.raw("SELECT setval('favlists_id_seq', (SELECT MAX(id) FROM favlists))"));
};
