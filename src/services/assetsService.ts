import IAssets from "../interfaces/IAssets";
import assetsModel from "../models/assetsModel";

const getAllAssets = async (): Promise<IAssets[]> => assetsModel.getAllAssets();

const getById = async (codAtivo: number): Promise<IAssets> => assetsModel.getById(codAtivo);

export default {
  getAllAssets,
  getById,
}