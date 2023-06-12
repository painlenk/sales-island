import { number, z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .nonempty("Este campo é requerido")
    .min(3, "minimo de 3 caracteres"),
  price: z.coerce
    .string()
    .nonempty("Este campo é requerido")
    .transform((price) => {
      if (price.includes(",")) {
        return Number(price.replace(",", ".").trim());
      }
      return Number(price);
    }),
  stock: z.coerce
    .number()
    .positive("Somente valor positivo")
    .or(z.string().regex(/^\d+$/).transform(Number)),
});
