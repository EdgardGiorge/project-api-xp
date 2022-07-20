import express from 'express'

const route = express.Router();


route.get('/', ativoController.getAllActive);

export default route;