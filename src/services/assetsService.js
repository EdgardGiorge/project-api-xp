const assetsModel = require('../models/assetsModel');

const getAllAssets = async () => assetsModel.getAllAssets();

const getById = async (codAtivo) => assetsModel.getById(codAtivo);

const getByAsset = async (ativo) => assetsModel.getByAsset(ativo);

const createAssets = async ({ ativo, qtdeAtivo, valorAtivo }) => {
  
  const { insertId } = await assetsModel.createAssets({ ativo, qtdeAtivo, valorAtivo });
  
  return { codAtivo: insertId, ativo, qtdeAtivo, valorAtivo };  
 }; // desconstrói e manda o codAtivo que foi definido e IAssetsBody devolve pro controller  


module.exports = {
  getAllAssets,
  getById,
  createAssets,
  getByAsset
}
