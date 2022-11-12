const accountService = require('../services/accountService');

const getAllAccount = async (_req, res) => {
  const account = await accountService.getAllAccount();
  try{

    if (!account) throw {status: 404, message: 'Digital accounts not found'};
    
    res.status(200).json(account);
  
    } catch(err){
      res.status(err.status).json({ message: err.message}); 
    }
};

const getById = async (req, res) => {
  try{
    const {codCliente} = (req.params); 
   const [account] = await accountService.getById(codCliente);
   if(!account) throw { status: 404, message: 'Digital account not found'};
   
   res.status(200).json(account);

 } catch(err){   
   res.status(err.status).json({ message: err.message});
 } 
}

const createAccount = async (req, res) => {
  
    const createAccount = await accountService.createAccount(req.body);
    
    res.status(201).json(createAccount);  
}

module.exports = {
  getAllAccount,
  getById,
  createAccount,  
}