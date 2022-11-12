const express = require('express');
// require('express-async-errors').config(); 
const routes = require('./routes');
//const error = require('./middlewares');



const app = express();

app.use(express.json());
app.use(routes);
//app.use(error.mError);

module.exports = app;