import IAssets from "../interfaces/IAssets";
import IAssetsBody from "../interfaces/IAssetsBody";
import IAsset from "../interfaces/IAsset";
import assetsModel from "../models/assetsModel";

const getAllAssets = async (): Promise<IAssets[]> => assetsModel.getAllAssets();

const getById = async (codAtivo: number): Promise<IAssets> => assetsModel.getById(codAtivo);

const getByAsset = async (ativo: string): Promise<IAsset> => assetsModel.getByAsset(ativo);

const createAssets = async ({ ativo, qtdeAtivo, valorAtivo }: IAssetsBody) => {
  
  const { insertId } = await assetsModel.createAssets({ ativo, qtdeAtivo, valorAtivo });
  
  return { codAtivo: insertId, ativo, qtdeAtivo, valorAtivo };  
 }; // desconstrói e manda o codAtivo que foi definido e IAssetsBody devolve pro controller  


export default {
  getAllAssets,
  getById,
  createAssets,
  getByAsset
}
