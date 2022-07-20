import IAssets from "../interfaces/IAssets";

const getAllAssets = async (): Promise<IAssets[]> => assetsModel.getAllAssets();

export default {
  getAllAssets
}