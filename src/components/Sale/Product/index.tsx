import { ProductHeader } from "./ProductHeader";
import { ProductList } from "./ProductList";

export const Product = () => {
  return (
    <div className="flex flex-col w-full h-2/4 p-4 border rounded ">
      <span className="mb-4">Produtos</span>
      <ProductHeader />

      <div className="border border-black rounded-b">
        <ProductList />
      </div>
    </div>
  );
};
