import express from "express";
import assetsRoute from './assetsRoute'
import countRoute from "./countRoute";

const routes = express.Router();

routes.use('/ativos', assetsRoute);
routes.use('/conta', countRoute);

export default routes;