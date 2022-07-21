import { RowDataPacket } from "mysql2";
import IAssets from "../interfaces/IAssets";
import connection from "./connection";

const getAllAssets = async (): Promise<IAssets[]> => {
  const [assets] = await connection.execute<RowDataPacket[]>('SELECT * FROM XP.Ativo ORDER BY Ativo.codAtivo;');

  return assets as IAssets[];
};

const getById = async (codAtivo: number): Promise<IAssets> => {
  const [assets] = await connection.execute<RowDataPacket[]>(
    `
    SELECT * FROM XP.Ativo WHERE codAtivo = ?;`,
    [codAtivo],
  ); 
  const [asset] = assets as IAssets[];
  return asset as IAssets;
};

  export default {
    getAllAssets,
    getById,
  }  