import { createProductSchema } from "@/schemas/form/createProductSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  name: string;
  price: number;
  stock: number;
}

export const ProductForm = () => {
  const [created, setCreated] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: 0,
    },
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(createProductSchema),
  });

  console.log("created -->", created);

  const createProduct = async (data: IFormInput) => {
    try {
      const request = await fetch(
        "http://localhost:3000/api/services/prisma/setProducts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );

      console.log(request);
      if (request.status !== 200) {
        setCreated(false);
        return;
      }

      setCreated(true);
    } catch (e) {
      setCreated(false);
      return "Não foi possível realizar o cadastro do produto";
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    createProduct(data);
  };

  const clearForm = () => {
    reset();
  };
  return (
    <div className="flex flex-col w-11/12 mt-4 mb-4 rounded-lg p-4 text-center bg-stone-800 border border-stone-600">
      <span className="text-cyan-400">Produto</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 grid-rows-3  gap-8 selection:border mt-4 text-right">
          <div className="h-18  flex flex-col gap-1">
            <input
              {...register("name")}
              type="text"
              placeholder="Produto"
              className="input input-bordered  w-full  rounded-lg  h-12"
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("price")}
              type="string"
              placeholder="Preço"
              className="input input-bordered  w-full  rounded-lg  h-12"
            />
            {errors.price && (
              <p className="text-red-400">{errors.price.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("stock")}
              type="number"
              placeholder="Quantidade para estoque"
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
            className="btn  btn-error rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-red-500 hover:text-black"
          >
            Cancelar
          </button>

          <input
            type="submit"
            className="btn  btn-success rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-green-500  hover:text-black"
          />
        </div>

        <div className="mt-8">
          {created && (
            <span className="text-green-500">
              Produto cadastrado com sucesso
            </span>
          )}

          {created === false && (
            <span className="text-red-500">
              Não foi possível cadastrar o produto
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
