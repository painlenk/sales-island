export const ProductHeader = () => {
  return (
    <div className="flex w-full border  border-stone-400  rounded-t  text-stone-400 font-semibold">
      <div className=" w-1/6 p-2">COD</div>
      <div className=" w-3/4 border-l  p-2">Nome</div>
      <div className=" w-1/6 border-l  p-2 text-center">Preço</div>
      <div className=" w-1/6 border-l  p-2 text-center">Qtd</div>
      <div className=" w-1/6 border-l  p-2 text-center">Total</div>
    </div>
  );
};
