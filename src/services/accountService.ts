import IAccount from "../interfaces/IAccount";
import IAccountBody from "../interfaces/IAccountBody";
import accountModel from "../models/accountModel";

const getAllAccount = async (): Promise<IAccount[]> => accountModel.getAllAccount();

const getById = async (codCliente: number): Promise<IAccount> => accountModel.getById(codCliente);

const createAccount = async ({ cliente, saldo }: IAccountBody) => {
  
  const { insertId } = await accountModel.createAccount({ cliente, saldo });
  
  return { codCliente: insertId, cliente, saldo };  
 }; 

export default {
  getAllAccount,
  getById,
  createAccount
}