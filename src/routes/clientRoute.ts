import express from 'express'
import clientController from '../controller/clientController';

const clientRoute = express.Router();


clientRoute.get('/', clientController.getAllClient);
clientRoute.get('/:codCliente', clientController.getById);

export default clientRoute;