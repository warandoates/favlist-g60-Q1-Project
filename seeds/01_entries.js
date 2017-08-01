exports.seed = function(knex, Promise) {
    return knex('entries').del()
        .then(()  => {
            return Promise.all([
                knex('entries').insert({
                    id: 1,
                    favlistId: 1,
                    name: 'Halloween',
                    description: 'The classic John Carpenter Film',
                    created_at: Date.now(),
                    updated_at: Date.now()
                }),
            ]);
        });
};
