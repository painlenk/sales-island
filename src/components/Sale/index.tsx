import { ClientForm } from "./ClientForm";
import { Product } from "./Product";
import { BiClipboard } from "react-icons/bi";
import { Summary } from "./Product/Summary";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

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

      <div className="w-full pl-11 pt-4">
        <span className="text-stone-200 text-left font-semibold flex items-center ">
          <BiClipboard fontSize={"24px"} className="mr-2" />
          Resumo da Venda
        </span>
      </div>

      <div className="flex flex-col w-11/12 mt-4 mb-4 rounded-lg p-4 text-start bg-stone-800 border border-stone-600 ">
        <Summary />

        <div className="w-full flex justify-around items-center pt-4 ">
          <button className="btn  btn-error rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-red-500 hover:text-black">
            <FiXCircle
              fontSize={"24px"}
              className="mr-2"
              fontWeight={"bolder"}
            />
            Cancelar compra
          </button>

          <button className="btn  btn-success rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-green-500  hover:text-black">
            <FiCheckCircle
              fontSize={"24px"}
              className="mr-2"
              fontWeight={"bolder"}
            />
            Realizar compra
          </button>
        </div>
      </div>
    </main>
  );
};
