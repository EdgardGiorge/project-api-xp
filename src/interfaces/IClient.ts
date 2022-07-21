import IClientBody from './IClientBody';

interface IClient extends IClientBody {
  codCliente: number;
  codAtivo: number;
}

export default IClient;