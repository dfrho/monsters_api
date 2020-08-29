const { Router } = require('express');

const routes = Router();

const monsters = require('./monsters');
const habitats = require('./habitats');
const lives = require('./lives');

routes.use('/monsters', monsters);
routes.use('/habitats', habitats);
routes.use('/lives', lives);

module.exports = routes;
