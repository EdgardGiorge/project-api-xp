const connection = require('./connection');

const getAllAssets = async ()=> {
  const [assets] = await connection.execute('SELECT * FROM XP.Ativo ORDER BY Ativo.codAtivo;');
  return assets;
};

const getById = async (codAtivo) => {
  const [assets] = await connection.execute(
    `
    SELECT * FROM XP.Ativo WHERE codAtivo = ?;`,
    [codAtivo],
  ); 
  return assets;
};


const getByAsset = async (ativo) => {
  const [assets] = await connection.execute('SELECT * FROM XP.Ativo WHERE ativo = ?', [ativo]);
  return assets;
  }  

const createAssets = async ({ ativo, qtdeAtivo, valorAtivo }) => {
  const [result] = await connection.execute(
    `
  INSERT INTO XP.Ativo (ativo, qtdeAtivo, valorAtivo) VALUES (?, ?, ?)`,
    [ativo, qtdeAtivo, valorAtivo],
  );
  return result;
}; 

const updateAsset = async (codAtivo, qtdeAtivo) => {
  const [result] = await connection.execute(
    'UPDATE XP.Ativo SET qtdeAtivo = XP.Ativo.qtdeAtivo + ? WHERE codAtivo = ?',
    [codAtivo, qtdeAtivo],
  );
  return result;
};

  module.exports = {
    getAllAssets,
    getById,
    getByAsset,
    createAssets,
    updateAsset,
  }  