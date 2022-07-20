import { Request, Response } from 'express';
import assetsService from '../models/assetsService';

const getAllAssets = async (req: Request, res: Response): Promise<Response> => {
  const assets = await assetsService.getAllAssets();
  return res.status(200).json(assets);
};

export default {
  getAllAssets
}