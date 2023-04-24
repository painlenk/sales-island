import { ClientForm } from "./ClientForm";
import { Product } from "./Product";
import { BiClipboard } from "react-icons/bi";

export const Sale = () => {
  return (
    <main
      className="flex flex-col p-6  w-3/4 items-center absolute"
      style={{ right: "4%" }}
    >
      <div className="w-full pl-11">
        <span className="text-stone-200 text-left font-semibold flex items-center ">
          <BiClipboard fontSize={"24px"} className="mr-2" />
          Nova Venda
        </span>
      </div>
      <ClientForm />
      <Product />
      <Product />
      <Product />
    </main>
  );
};
