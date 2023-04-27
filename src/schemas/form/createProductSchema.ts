import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().nonempty("Este campo é requerido").min(3),
  price: z.number().positive(" valor deve ser maior que zero"),
  stock: z.number().or(z.string().regex(/^\d+$/).transform(Number)),
});
