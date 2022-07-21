import IClient from "../interfaces/IClient";
import clientModel from "../models/clientModel";

const getAllClient = async (): Promise<IClient[]> => clientModel.getAllClient();

const getById = async (codCliente: number): Promise<IClient> => clientModel.getById(codCliente);

export default {
  getAllClient,
  getById,
}