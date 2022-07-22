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

  if (!assets) throw new Exception(404, 'Asset code not found');

  return res.status(200).json(assets);
};

const getByAsset = async (req: Request, res: Response): Promise<Response> => {
  const ativo = (req.params.ativo); // segundo argumento "10" pra não ter erro de radix, interpretação decimal        
  const assets = await assetsService.getByAsset(ativo);

  if (!assets) throw new Exception(404, 'Asset not found');

  return res.status(200).json(assets);
};

const createAssets = async (req: Request, res: Response): Promise<Response> => {
  const createAssets = await assetsService.createAssets(req.body);

  return res.status(201).json(createAssets);
};

export default {
  getAllAssets,
  getById,
  createAssets,
  getByAsset
}