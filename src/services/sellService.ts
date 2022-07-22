import IOrder from '../interfaces/IOrder';
import IAssets from '../interfaces/IAssets';
import sellModel from '../models/sellModel';
import assetsModel from '../models/assetsModel';
import { number } from 'joi';

//const sell = async ({iOrder}: Promise<IOrder>) => {
  // const assetInStock = await Promise.all((assets
  //   .map(async ({ codAtivo, qtdeAtivo }) => {
  //     const assetinStock = await assetsModel.getById(codAtivo);
  //     if (assetinStock.qtdeAtivo > qtdeAtivo) return true;
  //     return false;
  //   })));

  // if (assetInStock.includes(false)) return false;

  // await Promise.all(assets.map(({ codCliente, codAtivo, qtdeAtivo }) =>
  //   sellModel.sell( codCliente, codAtivo, qtdeAtivo)));
  
  // await Promise.all(assets.map(({ codAtivo, qtdeAtivo }) => 
  //   assetsModel.updateAsset(codAtivo, qtdeAtivo))); 

//   const iOrder = await sellModel.sell({ codCliente, codAtivo, qtdeAtivo });
  
//     return { codAtivo: insertId, ativo, qtdeAtivo, valorAtivo };   
  
// };

// export default {
//   sell
// }/

// const sell = async ({ codCliente, codAtivo, qtdeAtivo, valorAtivo }: IOrder) => {
  
//   await sellModel.sell({ codCliente, codAtivo, qtdeAtivo, valorAtivo });
  
//   return { id: insertId, codCliente, codAtivo, qtdeAtivo, valorAtivo };  
//  }; // desconstrói e manda o codAtivo que foi definido e IAssetsBody devolve pro controller 
// export default {
//   sell
// }