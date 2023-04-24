import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  return (
    <div className="overflow-y-scroll max-h-52">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};
