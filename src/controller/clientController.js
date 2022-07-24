const clientService = require('../services/clientService');


const getAllClient = async (_req, res) => {
  const client = await clientService.getAllClient();

  if (!client) {
    return res.status(404).json({message: 'Customers investments not found' });
  }  
  return res.status(200).json(client);
};

const getById = async (req, res) => {  
  try{
     const {codCliente} = (req.params); // segundo argumento "10" pra não ter erro de radix, interpretação decimal, isso no typescripts 
    const [client] = await clientService.getById(codCliente);
    if(!client) throw { status: 404, message: 'Customer investment not found'};
    
    res.status(200).json(client);

  } catch(err){   
    res.status(err.status).json({ message: err.message});
  }

};

const createClient = async (req, res) => {
  const createClient = await clientService.createClient(req.body);

  return res.status(201).json(createClient);
};

module.exports = {
  getAllClient,
  getById,
  createClient
}