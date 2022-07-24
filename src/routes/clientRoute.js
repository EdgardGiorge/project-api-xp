const express = require('express');
const clientController = require('../controller/clientController');
const validate = require('../middlewares/validate');

const clientRoute = express.Router();


clientRoute.get('/', clientController.getAllClient);
clientRoute.get('/:codCliente', clientController.getById);
clientRoute.post('/', validate, clientController.createClient);

module.exports = clientRoute;