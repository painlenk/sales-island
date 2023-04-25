import { Total } from "./Total";

export const Summary = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full  ">
        {/* head */}
        <thead className="bg-stone-800 border-b-2 border-stone-500 text-stone-300 font-semibold">
          <tr className="bg-stone-800">
            <th className="bg-stone-800">Nome</th>
            <th className="bg-stone-800">Qtd</th>
            <th className="bg-stone-800">Total</th>
          </tr>
        </thead>

        <tbody className="border-spacing-1 border-stone-500">
          <tr className="text-stone-300">
            <td className="bg-stone-800 border-none">folha simples branca</td>
            <td className="bg-stone-800 border-none ">2</td>
            <td className="bg-stone-800 border-none">R$ 1.00</td>
          </tr>

          <tr className="text-stone-300">
            <td className="bg-stone-800 ">folha simples teste</td>
            <td className="bg-stone-800 ">2</td>
            <td className="bg-stone-800 ">R$ 1.00</td>
          </tr>
        </tbody>
      </table>
      <Total />
    </div>
  );
};
