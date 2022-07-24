const connection = require('./connection');

const getAllClient = async () => {
  const [client] = await connection.execute('SELECT ac.codCliente, c.cliente, ac.codAtivo, a.ativo, ac.qtdeAtivo, ac.valorAtivo FROM XP.Ativo_Cliente AS ac  INNER JOIN Cliente AS c ON ac.codCliente = c.codCliente  INNER JOIN Ativo AS a ON a.codAtivo = ac.codAtivo ORDER BY codCliente;');
  return client;
};

const getById = async (codCliente)=> {
  const [client] = await connection.execute(
    `
    SELECT ac.codCliente, c.cliente, ac.codAtivo, a.ativo, ac.qtdeAtivo, ac.valorAtivo
FROM XP.Ativo_Cliente AS ac 
INNER JOIN Cliente AS c ON ac.codCliente = c.codCliente 
INNER JOIN Ativo AS a ON a.codAtivo = ac.codAtivo
WHERE ac.codCliente = ?;`,
    [codCliente],
  ); 
  return client;
};

const createClient = async ({ codCliente, codAtivo, qtdeAtivo, valorAtivo }) => {
  const [result] = await connection.execute(
    `
  INSERT INTO XP.Ativo_Cliente (codCliente, codAtivo, qtdeAtivo, valorAtivo) VALUES (?, ?, ?, ?)`,
    [codCliente, codAtivo, qtdeAtivo, valorAtivo],
  );
  return result;
};

  module.exports = {
    getAllClient,
    getById,
    createClient
  }  