const express = require('express');

const Avatar = require('./avatar-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Avatar.find()
        .then(avatarData => {
            res.status(200).json(avatarData);
        })
        .catch(err => {
            res.status(500).json({error: 'There was a problem with the database', err});
        });
});

router.post('/', (req, res) => {
    const avatar = req.body;
    if (avatar.avatar && avatar.origin) {
    Avatar.newAvatar(avatar)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({error: 'There was a problem with the database', err});
        });
    } else {
        res.status(400).json({ errorMessage: 'Please include an avatar name and origin to add data'});
    };
});

router.delete('/', (req, res) => {
    const id = req.params.id;

    Avatar.delAvatar(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted});
            } else {
                res.status(404).json({ message: 'Could not find avatar with given id'});
            };
        })
        .catch(err => {
            res.status(500).json({ error: 'There was a problem with the database', err});
        });
});

module.exports = router;