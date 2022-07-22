import express from 'express'
import accountController from '../controller/accountController';

const accountRoute = express.Router();


accountRoute.get('/', accountController.getAllAccount);
accountRoute.get('/:codCliente', accountController.getById);

export default accountRoute;