import { RowDataPacket } from "mysql2";
import IAccount from "../interfaces/IAccount";
import connection from "./connection";

const getAllAccount = async (): Promise<IAccount[]> => {
  const [accounts] = await connection.execute<RowDataPacket[]>('SELECT * FROM XP.Cliente ORDER BY Cliente.codCliente;');

  return accounts as IAccount[];
};

const getById = async (codCliente: number): Promise<IAccount> => {
  const [accounts] = await connection.execute<RowDataPacket[]>(
    `
    SELECT * FROM XP.Cliente WHERE codCliente = ?;`,
    [codCliente],
  ); 
  const [count] = accounts as IAccount[];
  return count as IAccount;
};

  export default {
    getAllAccount,
    getById,
  }  