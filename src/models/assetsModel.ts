import { ResultSetHeader, RowDataPacket } from "mysql2";
import IAssets from "../interfaces/IAssets";
import IAssetsBody from "../interfaces/IAssetsBody";
import IAsset from "../interfaces/IAsset";
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


const getByAsset = async (ativo: string): Promise<IAsset> => {
  const [assets] = await connection.execute<RowDataPacket[]>('SELECT * FROM XP.Ativo WHERE ativo = ?', [ativo]);
  const [asset] = assets as IAsset[];
  return asset as IAsset;
  }

const createAssets = async ({ ativo, qtdeAtivo, valorAtivo }: IAssetsBody) => {
  const [result] = await connection.execute<ResultSetHeader>(
    `
  INSERT INTO XP.Ativo (ativo, qtdeAtivo, valorAtivo) VALUES (?, ?, ?)`,
    [ativo, qtdeAtivo, valorAtivo],
  );
  return result;
}; // quando usa Insert usamos a tipagem ResultSetHeader

  export default {
    getAllAssets,
    getById,
    getByAsset,
    createAssets
  }  