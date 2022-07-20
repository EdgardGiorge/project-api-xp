import express from 'express'
import assetsController from '../controller/assetsController';

const route = express.Router();


route.get('/', assetsController.getAllAssets);
route.get('/:id', assetsController.getById);

export default route;