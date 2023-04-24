import {
  FcPaid,
  FcMoneyTransfer,
  FcBarChart,
  FcSurvey,
  FcManager,
} from "react-icons/fc";
export const Nav = () => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col gap-3">
        <li className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700 flex gap-1 justify-items-start w-full pt-2 pb-2">
          <FcPaid fontSize={"24px"} className="mr-2" />
          Vendas
        </li>

        <li className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700  flex gap-1 justify-items-start w-full pt-2 pb-2">
          <FcMoneyTransfer fontSize={"24px"} className="mr-2" />
          Caixa
        </li>

        <li className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700  flex gap-1 justify-items-start w-full pt-2 pb-2">
          <FcBarChart fontSize={"24px"} className="mr-2" />
          Relatórios
        </li>

        <li className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700  flex gap-1 justify-items-start w-full pt-2 pb-2">
          <FcSurvey fontSize={"24px"} className="mr-2" />
          Cadastro de Produtos
        </li>

        <li className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700  flex gap-1 justify-items-start w-full pt-2 pb-2">
          <FcManager fontSize={"24px"} className="mr-2" />
          Cadastro de Usuários
        </li>
      </ul>
    </nav>
  );
};
