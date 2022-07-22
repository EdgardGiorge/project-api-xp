import express from "express";
import assetsRoute from './assetsRoute'
import clientRoute from "./clientRoute";
import accountRoute from "./accountRoute";


const routes = express.Router();

routes.use('/ativos', assetsRoute);
routes.use('/conta', accountRoute);
routes.use('/investimentos', clientRoute);
//routes.use('/investimentos/vender', sellRoute);


export default routes;