import { Request, Response } from 'express';
import Exception from '../helpers/exceptionError';

const getAllAssets = async (req: Request, res: Response): Promise<Response> => {
  const assets = await assetsService.getAllAssets();
  return res.status(200).json(assets);
};

export default {
  getAllAssets
}