import IAccount from "../interfaces/IAccount";
import accountModel from "../models/accountModel";

const getAllAccount = async (): Promise<IAccount[]> => accountModel.getAllAccount();

const getById = async (codCliente: number): Promise<IAccount> => accountModel.getById(codCliente);

export default {
  getAllAccount,
  getById,
}