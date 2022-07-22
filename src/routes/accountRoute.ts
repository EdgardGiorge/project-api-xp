import express from 'express'
import accountController from '../controller/accountController';
import validate from '../middlewares/validate';

const accountRoute = express.Router();


accountRoute.get('/', accountController.getAllAccount);
accountRoute.get('/:codCliente', accountController.getById);
accountRoute.post('/', validate, accountController.createAccount);

export default accountRoute;