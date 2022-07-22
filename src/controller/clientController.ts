import { Request, Response } from 'express';
import Exception from '../helpers/exceptionError';
import clientService from '../services/clientService';


const getAllClient = async (req: Request, res: Response): Promise<Response> => {
  const client = await clientService.getAllClient();
  return res.status(200).json(client);
};

const getById = async (req: Request, res: Response): Promise<Response> => {
  const codCliente = parseInt(req.params.codCliente, 10); // segundo argumento "10" pra não ter erro de radix, interpretação decimal        
  const client = await clientService.getById(codCliente);

  if (!client) throw new Exception(404, 'Customer investment not found');

  return res.status(200).json(client);
};

const createClient = async (req: Request, res: Response): Promise<Response> => {
  const createClient = await clientService.createClient(req.body);

  return res.status(201).json(createClient);
};

export default {
  getAllClient,
  getById,
  createClient
}