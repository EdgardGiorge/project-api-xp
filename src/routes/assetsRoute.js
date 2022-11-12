const express = require('express');
const assetsController = require('../controller/assetsController');
const {validate}  = require('../middlewares');

const assetsRoute = express.Router();


assetsRoute.get('/', assetsController.getAllAssets);
assetsRoute.get('/:codAtivo', assetsController.getById);
assetsRoute.get('/name/:ativo', assetsController.getByAsset);
assetsRoute.post('/', validate, assetsController.createAssets);

module.exports = assetsRoute;