import express from "express";
import assetsRoute from './assetsRoute'
import clientRoute from "./clientRoute";
import countRoute from "./countRoute";

const routes = express.Router();

routes.use('/ativos', assetsRoute);
routes.use('/conta', countRoute);
routes.use('/ativoscliente', clientRoute);

export default routes;