import { ResultSetHeader, RowDataPacket } from "mysql2";
import IAccount from "../interfaces/IAccount";
import IAccountBody from "../interfaces/IAccountBody";
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

const createAccount = async ({ cliente, saldo }: IAccountBody) => {
  const [result] = await connection.execute<ResultSetHeader>(
    `
  INSERT INTO XP.Cliente (cliente, saldo) VALUES (?, ?)`,
    [cliente, saldo],
  );
  return result;
}; 

  export default {
    getAllAccount,
    getById,
    createAccount
  }  