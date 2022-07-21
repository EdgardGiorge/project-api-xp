import express from 'express'
import countController from '../controller/countController';

const countRoute = express.Router();


countRoute.get('/', countController.getAllCount);
countRoute.get('/:codCliente', countController.getById);

export default countRoute;