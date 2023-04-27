import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().nonempty("Este campo é requerido").min(3),
  price: z.string().nonempty("Este campo é requerido"),
  stock: z
    .number()
    .nonnegative("Inserir valor maior que 0")
    .min(1, "Inserir valor numérico maior que 0"),
});
