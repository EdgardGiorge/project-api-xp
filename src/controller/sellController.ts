import { Request, Response } from 'express';
import IOrder from '../interfaces/IOrder';
import sellModel from '../models/sellModel';


// const sell = async (req: Request, res: Response): Promise<Response> => {
//   const { codCliente: codCliente } = res.locals.user;
//   const sell = await sellService.createSell(req.body, codCliente ;
//   return res.status(201).json(sell);
// };

// export default {
//   sell
// };

// const sell = async (req: Request, res: Response): Promise<Response> => {
//   const sell = await sellService.sell(req.body);
  
//   if (!sell) {    
//     return res.status(422).json({ message: 'Such amount is not permitted to sell' });
//   }

//   return res.status(201).json(sell);
// };

// export default {
//   sell
// }

// const sell = async (req: Request, res: Response): Promise<Response> => {
//   const {codCliente, codAtivo,qtdeAtivo, valorAtivo} = await sellService.sell(req.body);

//   return res.status(201).json(codCliente);
// };



// export default {
//   sell
// }