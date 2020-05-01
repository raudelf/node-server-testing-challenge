const express = require('express');

const AvatarRouter = require('./endpoints/avatar-router.js');

const server = express();

server.use(express.json());
server.use('/api/avatar', AvatarRouter);

module.exports = server;