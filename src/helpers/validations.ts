import Joi, { ObjectSchema } from "joi";

interface IDto {
  ativos: ObjectSchema
  investimentos: ObjectSchema
  conta: ObjectSchema  
}

const dto: IDto = {
  ativos: Joi.object({
    ativo: Joi.string().min(3).required(),
    qtdeAtivo: Joi.number().min(1).required(),
    valorAtivo: Joi.number().min(2).required(),
  }),

  investimentos: Joi.object({
    codCliente: Joi.number().min(3).required(),
    codAtivo: Joi.number().min(3).required(),
    qtdeAtivo: Joi.number().min(1).required(),
    valorAtivo: Joi.number().min(1).required(),
  }),

  conta: Joi.object({
    cliente: Joi.string().min(3).required(),
    saldo: Joi.number().min(1).required(),
  }),  
}

export default dto;