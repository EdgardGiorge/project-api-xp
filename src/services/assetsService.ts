import IAssets from "../interfaces/IAssets";
import assetsModel from "../models/assetsModel";

const getAllAssets = async (): Promise<IAssets[]> => assetsModel.getAllAssets();

const getById = async (id: number): Promise<IAssets> => assetsModel.getById(id);

export default {
  getAllAssets,
  getById,
}