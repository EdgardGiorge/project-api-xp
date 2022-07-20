import { RowDataPacket } from "mysql2";
import ICount from "../interfaces/ICount";
import connection from "./connection";

const getAllCount = async (): Promise<ICount[]> => {
  const [counts] = await connection.execute<RowDataPacket[]>('SELECT * FROM XP.Cliente ORDER BY Cliente.codCliente;');

  return counts as ICount[];
};

const getById = async (id: number): Promise<ICount> => {
  const [counts] = await connection.execute<RowDataPacket[]>(
    `
    SELECT * FROM XP.Cliente WHERE codCliente = ?;`,
    [id],
  ); 
  const [count] = counts as ICount[];
  return count as ICount;
};

  export default {
    getAllCount,
    getById,
  }  