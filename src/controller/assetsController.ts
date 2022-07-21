import { Request, Response } from 'express';
import Exception from '../helpers/exceptionError';
import assetsService from '../services/assetsService';


const getAllAssets = async (req: Request, res: Response): Promise<Response> => {
  const assets = await assetsService.getAllAssets();
  return res.status(200).json(assets);
};

const getById = async (req: Request, res: Response): Promise<Response> => {
  const codAtivo = parseInt(req.params.codAtivo, 10); // segundo argumento "10" pra não ter erro de radix, interpretação decimal        
  const assets = await assetsService.getById(codAtivo);

  if (!assets) throw new Exception(404, 'Aset not found');

  return res.status(200).json(assets);
};

export default {
  getAllAssets,
  getById,
}