const express = require('express');
const assetsRoute = require('./assetsRoute');
const clientRoute = require('./clientRoute') ;
const accountRoute = require('./accountRoute.js');
const mError = require('../middlewares');



const routes = express.Router();

routes.use('/ativos', assetsRoute);
routes.use('/conta', accountRoute);
routes.use('/investimentos', clientRoute);
routes.use(mError.mError);

//routes.use('/investimentos/vender', sellRoute);


module.exports =  routes;