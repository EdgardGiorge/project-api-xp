const accountModel = require('../models/accountModel');

const getAllAccount = async () => accountModel.getAllAccount();

const getById = async (codCliente) => accountModel.getById(codCliente);

const getByAccount = async (cliente) => accountModel.getByAccount(cliente);

const createAccount = async ({ cliente, saldo }) => {
  
  const { insertId } = await accountModel.createAccount({ cliente, saldo });
  
  return { codCliente: insertId, cliente, saldo };  
 };     

module.exports = {
  getAllAccount,
  getById,
  createAccount,   
}

