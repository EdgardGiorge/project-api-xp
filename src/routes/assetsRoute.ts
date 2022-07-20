import express from 'express'
import assetsController from '../controller/assetsController';

const route = express.Router();


route.get('/', assetsController.getAllAssets);

export default route;