import { Request, Response } from 'express';
import Exception from '../helpers/exceptionError';
import accountService from '../services/accountService';


const getAllAccount = async (req: Request, res: Response): Promise<Response> => {
  const account = await accountService.getAllAccount();
  return res.status(200).json(account);
};

const getById = async (req: Request, res: Response): Promise<Response> => {
  const codCliente = parseInt(req.params.codCliente, 10); // segundo argumento "10" pra não ter erro de radix, interpretação decimal        
  const account = await accountService.getById(codCliente);

  if (!account) throw new Exception(404, 'Digital account not found');

  return res.status(200).json(account);
};

export default {
  getAllAccount,
  getById,
}