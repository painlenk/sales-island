import { ClientForm } from "./ClientForm";
import { Product } from "./Product";

export const Sale = () => {
  return (
    <main className="flex flex-col  p-6 w-full h-full ">
      <div>
        <span>Nova Venda</span>
      </div>
      <ClientForm />
      <Product />
    </main>
  );
};
