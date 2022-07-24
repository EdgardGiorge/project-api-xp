const express = require('express');
const accountController = require('../controller/accountController');

const accountRoute = express.Router();


accountRoute.get('/conta', accountController.getAllAccount);
accountRoute.get('/conta/:codCliente', accountController.getById);
accountRoute.post('/conta', accountController.createAccount);

module.exports = accountRoute;