const db = require('../data/db-config.js');

function find() {
    return db('avatar-table');
};

function newAvatar(avatar) {
    return db('avatar-table').insert(avatar);
};

function delAvatar(id) {
    return db('avatar-table')
        .del()
        .where('avatar-table.id', id);
};

module.exports = {
    find,
    newAvatar,
    delAvatar
};