import { ProductForm } from "./ProductForm";
import { BiHighlight } from "react-icons/bi";

export const RegisterProduct = () => {
  return (
    <main
      className="flex flex-col p-6 h-screen  w-3/4 items-center"
      style={{ marginLeft: "22%" }}
    >
      <div className="w-full pl-11">
        <span className="text-stone-200 text-left font-semibold flex items-center ">
          <BiHighlight fontSize={"24px"} className="mr-2" />
          Cadastro de Produto
        </span>
      </div>
      <ProductForm />
    </main>
  );
};
