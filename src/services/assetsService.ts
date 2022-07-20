import IAssets from "../interfaces/IAssets";
import assetsModel from "../models/assetsModel";

const getAllAssets = async (): Promise<IAssets[]> => assetsModel.getAllAssets();

export default {
  getAllAssets
}