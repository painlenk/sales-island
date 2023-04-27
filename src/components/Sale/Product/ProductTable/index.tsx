import { useEffect, useState } from "react";

export const ProductTable = () => {
  const [productsList, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:3000/api/services/prisma/getProducts"
      );
      const products: IProduct[] = await data.json();

      setProducts(products);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="rounded-lg overflow-auto max-h-96 ">
      <table className="table w-full ">
        <thead>
          <tr>
            <th>COD</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qtd</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id}>
              <th>{product.id}</th>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
              <td>2</td>
              <td>R$ 1.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
