const clientModel = require('../models/clientModel');

const getAllClient = async ()  => clientModel.getAllClient();

const getById = async (codCliente) => clientModel.getById(codCliente);

const createClient = async ({ codCliente, codAtivo, qtdeAtivo, valorAtivo }) => {
  
  const { insertId } = await clientModel.createClient({ codCliente, codAtivo, qtdeAtivo, valorAtivo });
  
  return { id: insertId, codCliente, codAtivo, qtdeAtivo, valorAtivo };  
 };

module.exports = {
  getAllClient,
  getById,
  createClient,
}