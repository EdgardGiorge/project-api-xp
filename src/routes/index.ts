import express from "express";
import ativoRoute from './ativoRoute'

const routes = express.Router();

routes.use('/ativos', ativoRoute);

export default routes;