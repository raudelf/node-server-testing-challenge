const express = require('express');

const AvatarRouter = require('./endpoints/avatar-router.js');

const server = express();

server.use(express.json());
server.use('/api/avatars', AvatarRouter);

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'running' });
});

module.exports = server;