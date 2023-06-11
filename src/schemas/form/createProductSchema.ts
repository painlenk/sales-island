import {z} from 'zod'

export const createProductSchema = z.object({
  name: z.string().nonempty("Este campo é requerido").min(3, 'minimo de 3 caracteres'),
  price: z.string().nonempty('Este campo é requerido').min(1, 'minimo um caracter'),
  stock: z.number().or(z.string().regex(/^\d+$/).transform(Number)),
});
