
exports.up = function(knex) {
    return knex.schema.createTable('avatar-table', tbl => {
        tbl.increments('id');
        tbl.text('avatar')
            .unique()
            .notNullable();
        tbl.text('origin')
            .notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('avatar-table');
};
