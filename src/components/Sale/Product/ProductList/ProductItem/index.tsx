import { useEffect, useState } from "react";

export const ProductItem = () => {
  const [qtd, setQtd] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const productValue = 100;

  const addOne = () => {
    setQtd(qtd + 1);
    if (qtd == 0) {
      return;
    }
  };

  const subOne = () => {
    console.log("click");
    if (qtd == 0) {
      return;
    }
    setQtd(qtd - 1);
  };

  useEffect(() => {
    setValue(productValue * qtd);
  }, [qtd]);
  return (
    <>
      <div className=" w-1/6 p-2 ">0001</div>
      <div className="  w-3/4  p-2 ">Impressão folha simples</div>
      <div className=" w-1/6 p-2 text-center ">R$ 0,50</div>
      <div className=" w-1/6 p-2 flex justify-center text-center ">
        <button
          className="border border-stone-900 w-1/5  bg-red-400  font-bold rounded-md text-stone-900"
          onClick={() => subOne()}
        >
          -
        </button>
        <span className="ml-1 mr-1">{qtd} un</span>
        <button
          className="border border-stone-900  w-1/5 bg-green-500 font-bold rounded-md  text-stone-900"
          onClick={() => addOne()}
        >
          +
        </button>
      </div>
      <div className=" w-1/6 p-2 text-center">R$ {value}</div>
    </>
  );
};
