import express from 'express'
import clientController from '../controller/clientController';
import validate from '../middlewares/validate';

const clientRoute = express.Router();


clientRoute.get('/', clientController.getAllClient);
clientRoute.get('/:codCliente', clientController.getById);
clientRoute.post('/', validate, clientController.createClient);

export default clientRoute;