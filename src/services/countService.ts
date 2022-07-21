import ICount from "../interfaces/ICount";
import countModel from "../models/countModel";

const getAllCount = async (): Promise<ICount[]> => countModel.getAllCount();

const getById = async (codCliente: number): Promise<ICount> => countModel.getById(codCliente);

export default {
  getAllCount,
  getById,
}