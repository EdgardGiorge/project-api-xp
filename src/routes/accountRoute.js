const express = require('express');
const accountController = require('../controller/accountController');

const accountRoute = express.Router();


accountRoute.get('/', accountController.getAllAccount);
accountRoute.get('/:codCliente', accountController.getById);
accountRoute.post('/', validate, accountController.createAccount);

module.exports = accountRoute;