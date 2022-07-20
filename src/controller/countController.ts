import { Request, Response } from 'express';
import Exception from '../helpers/exceptionError';
import countService from '../services/countService';


const getAllCount = async (req: Request, res: Response): Promise<Response> => {
  const count = await countService.getAllCount();
  return res.status(200).json(count);
};

const getById = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id, 10); // segundo argumento "10" pra não ter erro de radix, interpretação decimal        
  const count = await countService.getById(id);

  if (!count) throw new Exception(404, 'Count not found');

  return res.status(200).json(count);
};

export default {
  getAllCount,
  getById,
}