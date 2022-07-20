import Joi, { ObjectSchema } from "joi";

interface IDto {
  ativos: ObjectSchema  
}

const dto: IDto = {
  ativos: Joi.object({
    ativo: Joi.string().min(3).required(),
    qtdeAtivo: Joi.number().min(1).required(),
    valorAtivo: Joi.number().min(2).required(),
  }),
}

export default dto;