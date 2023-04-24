import { ClientForm } from "./ClientForm";
import { Product } from "./Product";

export const Sale = () => {
  return (
    <main className="flex flex-col p-6  w-full h-full items-center">
      <div className="w-full pl-11">
        <span className="text-stone-200 text-left font-semibold">
          Nova Venda
        </span>
      </div>
      <ClientForm />
      <Product />
    </main>
  );
};
