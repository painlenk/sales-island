export const ProductHeader = () => {
  return (
    <div className="flex w-full border border-black rounded-t">
      <div className=" w-1/6 p-2">COD</div>
      <div className=" w-3/4 border-l border-black p-2">Nome</div>
      <div className=" w-1/6 border-l border-black p-2 text-center">Preço</div>
      <div className=" w-1/6 border-l border-black p-2 text-center">Qtd</div>
      <div className=" w-1/6 border-l border-black p-2 text-center">Total</div>
    </div>
  );
};
