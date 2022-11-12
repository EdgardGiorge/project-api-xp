const connection = require('./connection');

const getAllAccount = async () => {
  const [accounts] = await connection.execute('SELECT * FROM XP.Cliente ORDER BY Cliente.codCliente;');
  return accounts;
};

const getById = async (codCliente) => {
  const [accounts] = await connection.execute(
    `
    SELECT * FROM XP.Cliente WHERE codCliente = ?;`,
    [codCliente],
  ); 
  return accounts;
};

const createAccount = async ({ cliente, saldo }) => {
  const [result] = await connection.execute(
    `
  INSERT INTO XP.Cliente (cliente, saldo) VALUES (?, ?)`,
    [cliente, saldo],
  );
  return result;
};

  module.exports = {
    getAllAccount,
    getById,
    createAccount,
  }  