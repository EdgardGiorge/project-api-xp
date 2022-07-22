import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import IOrder from '../interfaces/IOrder';

const sell = async ( codCliente: number, codAtivo: number, qtdeAtivo: number, valorAtivo: number): Promise<IOrder> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO XP.Ativo_Cliente (ativo, qtdeAtivo, valorAtivo) VALUES (?, ?, ?, ?)`,
    [codCliente, codAtivo, qtdeAtivo, valorAtivo],
  );
  const [asset] = result as unknown as IOrder[];
  return asset as IOrder;
};

export default {
  sell,
}