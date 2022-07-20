import { RowDataPacket } from "mysql2";
import IAssets from "../interfaces/IAssets";
import connection from "./connection";

const getAllAssets = async (): Promise<IAssets[]> => {
  const [assets] = await connection.execute<RowDataPacket[]>('SELECT Ativo.codAtivo, Ativo.ativo, Ativo.qtdeAtivo, Ativo.valorAtivo FROM XP.Ativo ORDER BY Ativo.codAtivo;');

  return assets as IAssets[];
};

  export default {
    getAllAssets
  }  