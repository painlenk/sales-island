import { ProductTable } from "./ProductTable";

export const Product = () => {
  return (
    <div className="flex flex-col  w-11/12 h-2/3 p-4 bg-stone-800 border border-stone-600 rounded-lg ">
      <span className="mb-4 text-center text-cyan-400">Produtos</span>

      <ProductTable />
    </div>
  );
};
