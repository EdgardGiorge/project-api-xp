
// const mError = (error, req, res, next) => {
//   try{  res.status(error.status || 500).json({ error: error.message });
//   } catch(err) {
//     res.status(err.status).json({ message: err.message});
//   }

// }; // desconstrói o status e o msg na linha 5, se o erro não vier pelo status usa o 500, desta forma pegamos os dois Erros de Error e de Exceptions 

// module.exports = mError;
/* Este Middleware de erro será lançado quando qualquer erro acontecer, a assinatura dele recebe quatro parâmetros: function (err, req, res, next) {}. Caso erro de exceção seja capturado, envia a mensagem de erro. Lançamos esta Middleware no app.use(errorMiddleware)
linha 7 : desconstrói o status e o msg na linha 5, se o erro não vier pelo status usa o 500, desta forma pegamos os dois Erros de Error e de Exceptions 
*/    

 const mError = (error, _req, res, _next) => res.status(error.status || 500).json({ message: error.message });

 module.exports = mError;