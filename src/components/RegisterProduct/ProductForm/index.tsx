import { createProductSchema } from "@/schemas/form/createProductSchema";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";

type CreateProduct = z.infer<typeof createProductSchema>;

export const ProductForm = () => {
  const [created, setCreated] = useState<boolean | null>(null);
  const [price, setPrice] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<CreateProduct>({
    defaultValues: {
      name: "",
      stock: 0,
      price: undefined,
    },
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(createProductSchema),
  });

  console.log("created -->", created);

  const createProduct = async (data: CreateProduct) => {
    try {
      const request = await fetch(
        "http://localhost:3000/api/services/prisma/setProduct",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      if (request.status !== 200) {
        return;
      }
      setCreated(true);
    } catch (e) {
      return "Não foi possível realizar o cadastro do produto";
    }
  };

  const onSubmit = async (data: CreateProduct) => {
    await createProduct(data);
  };

  const clearForm = () => {
    reset();
  };

  return (
    <div className="flex flex-col w-11/12 mt-4 mb-4 rounded-lg p-4 text-center bg-stone-800 border border-stone-600">
      <span className="text-cyan-400">Produto</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 grid-rows-3  gap-8 selection:border mt-4 text-right">
          <div className="flex flex-col gap-1 justify-start items-start">
            <label htmlFor="product" className="text-white">
              Produto:
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Produto"
              id="product"
              className="input input-bordered  w-full  rounded-lg  h-12"
            />
            {errors?.name && (
              <p className="text-red-400">{errors?.name?.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 justify-start items-start">
            <label htmlFor="price" className="text-white">
              Preço:
            </label>
            <input
              {...register("price")}
              type="text"
              placeholder="Preço"
              id="price"
              className="input input-bordered  w-full  rounded-lg  h-12"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.replace(/[^,\d\s]/, "");
                setPrice(value);
                setValue("price", Number(price));
              }}
              value={price}
            />
            {errors.price && (
              <p className="text-red-400">{errors.price.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 justify-start items-start">
            <label htmlFor="stock" className="text-white">
              quantidade para estoque:
            </label>
            <input
              {...register("stock")}
              type="number"
              id="stock"
              className="input input-bordered  w-full  rounded-lg  h-12"
            />
            {errors.stock && (
              <p className="text-red-400">{errors.stock.message}</p>
            )}
          </div>
        </div>

        <div className="w-full flex justify-around items-center pt-4 ">
          <button
            onClick={clearForm}
            className="btn w-28  btn-error rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-red-500 hover:text-black"
          >
            Cancelar
          </button>

          <input
            type="submit"
            className="btn w-28 btn-success rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-green-500  hover:text-black"
          />
        </div>

        <div className="mt-8">
          <span className="text-green-500">
            {
              created
                ? "Produto cadastrado com sucesso"
                : "Erro ao cadastrar o produto" /*resolver isso amanha */
            }
          </span>
        </div>
      </form>
    </div>
  );
};
