import express from 'express'

const route = express.Router();


route.get('/', assetsController.getAllAssets);

export default route;