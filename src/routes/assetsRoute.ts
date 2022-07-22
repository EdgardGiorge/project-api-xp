import express from 'express'
import validate from '../middlewares/validate';
import assetsController from '../controller/assetsController';

const assetsRoute = express.Router();


assetsRoute.get('/', assetsController.getAllAssets);
assetsRoute.get('/:codAtivo', assetsController.getById);
assetsRoute.get('/name/:ativo', assetsController.getByAsset);
assetsRoute.post('/', validate, assetsController.createAssets);

export default assetsRoute;