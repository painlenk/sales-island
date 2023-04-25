import { ClientForm } from "./ClientForm";
import { Product } from "./Product";
import { BiClipboard } from "react-icons/bi";
import { Summary } from "./Product/Summary";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { ActionButton } from "./ActionButton";

export const Sale = () => {
  return (
    <main
      className="flex flex-col p-6  w-3/4 items-center"
      style={{ marginLeft: "22%" }}
    >
      <div className="w-full pl-11">
        <span className="text-stone-200 text-left font-semibold flex items-center ">
          <BiClipboard fontSize={"24px"} className="mr-2" />
          Nova Venda
        </span>
      </div>
      <ClientForm />
      <Product />

      <div className="w-full pl-11 pt-8 ">
        <span className="text-stone-200 text-left font-semibold flex items-center ">
          <BiClipboard fontSize={"24px"} className="mr-2" />
          Resumo da Venda
        </span>
      </div>

      <div className="flex flex-col w-11/12 mt-4 mb-4 rounded-lg p-4 text-start bg-stone-800 border border-stone-600 ">
        <Summary />

        <div className="w-full flex justify-around items-center pt-4 ">
          <ActionButton buttonType="cancel" />
          <ActionButton buttonType="pay" />
        </div>
      </div>
    </main>
  );
};
