const assetsService = require('../services/assetsService');


const getAllAssets = async (_req, res) => {
  const assets = await assetsService.getAllAssets();
  try{

  if (!assets) throw {status: 404, message: 'Assets not found'};
  
  res.status(200).json(assets);

  } catch(err){
    res.status(err.status).json({ message: err.message}); 
  }
};

const getById = async (req, res) => {  
  try{
     const {codAtivo} = (req.params); // segundo argumento "10" pra não ter erro de radix, interpretação decimal, isso no typescripts 
    const [assets] = await assetsService.getById(codAtivo);
    if(!assets) throw { status: 404, message: 'Asset code not found'};
    
    res.status(200).json(assets);

  } catch(err){   
    res.status(err.status).json({ message: err.message});
  }

};

const getByAsset = async (req, res) => {
  try{
  const ativo = (req.params.ativo);
  const [assets] = await assetsService.getByAsset(ativo);
  if (!assets) throw { status: 404, message: 'Asset not found'};
     
    res.status(200).json(assets); 

  } catch(err){
    res.status(err.status).json({ message: err.message});
  }
};

const createAssets = async (req, res) => {
  try{    
    const ativo = (req.body.ativo);
    const [assets] = await assetsService.getByAsset(ativo);    
  
    if (assets) throw { status: 409, message: 'Product already exists'};
    const createAssets = await assetsService.createAssets(req.body);
    
    res.status(201).json(createAssets);

    } catch(err){
      res.status(err.status).json({ message: err.message});
    }

};

module.exports = {
  getAllAssets,
  getById,
  createAssets,
  getByAsset
}