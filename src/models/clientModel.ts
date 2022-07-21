import { RowDataPacket } from "mysql2";
import IClient from "../interfaces/IClient";
import connection from "./connection";

const getAllClient = async (): Promise<IClient[]> => {
  const [client] = await connection.execute<RowDataPacket[]>('SELECT ac.codCliente, c.cliente, ac.codAtivo, a.ativo, ac.qtdeAtivo, ac.valorAtivo FROM XP.Ativo_Cliente AS ac  INNER JOIN Cliente AS c ON ac.codCliente = c.codCliente  INNER JOIN Ativo AS a ON a.codAtivo = ac.codAtivo;');

  return client as IClient[];
};

const getById = async (codCliente: number): Promise<IClient> => {
  const [client] = await connection.execute<RowDataPacket[]>(
    `
    SELECT ac.codCliente, c.cliente, ac.codAtivo, a.ativo, ac.qtdeAtivo, ac.valorAtivo
FROM XP.Ativo_Cliente AS ac 
INNER JOIN Cliente AS c ON ac.codCliente = c.codCliente 
INNER JOIN Ativo AS a ON a.codAtivo = ac.codAtivo
WHERE ac.codCliente = ?;`,
    [codCliente],
  ); 
  const [clients] = client as IClient[];
  return clients as IClient;
};

  export default {
    getAllClient,
    getById,
  }  