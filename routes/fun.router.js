const express = require('express');
const funRouter = express.Router();
const funController = require('../controllers/fun/fun.controller')

funRouter.get('/firstTest', funController.firstTest);

module.exports = funRouter;