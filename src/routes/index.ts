import express from "express";
import assetsRoute from './assetsRoute'

const routes = express.Router();

routes.use('/ativos', assetsRoute);

export default routes;