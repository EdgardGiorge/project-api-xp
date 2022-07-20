import ICount from "../interfaces/ICount";
import countModel from "../models/countModel";

const getAllCount = async (): Promise<ICount[]> => countModel.getAllCount();

const getById = async (id: number): Promise<ICount> => countModel.getById(id);

export default {
  getAllCount,
  getById,
}