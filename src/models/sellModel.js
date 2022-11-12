const connection = require('./connection');

const sell = async ( codCliente, codAtivo, qtdeAtivo, valorAtivo) => {
  const [result] = await connection.execute(
    `
    INSERT INTO XP.Ativo_Cliente (ativo, qtdeAtivo, valorAtivo) VALUES (?, ?, ?, ?)`,
    [codCliente, codAtivo, qtdeAtivo, valorAtivo],
  );
  return result;
};

module.exports = {
  sell,
}