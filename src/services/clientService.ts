import IClient from "../interfaces/IClient";
import clientModel from "../models/clientModel";

const getAllClient = async (): Promise<IClient[]> => clientModel.getAllClient();

const getById = async (codCliente: number): Promise<IClient> => clientModel.getById(codCliente);

const createClient = async ({ codCliente, codAtivo, qtdeAtivo, valorAtivo }: IClient) => {
  
  const { insertId } = await clientModel.createClient({ codCliente, codAtivo, qtdeAtivo, valorAtivo });
  
  return { id: insertId, codCliente, codAtivo, qtdeAtivo, valorAtivo };  
 };

export default {
  getAllClient,
  getById,
  createClient,
}