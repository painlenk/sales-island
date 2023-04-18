export const Header = () => {
  return (
    <div className="w-full h-full p-3 border border-black gap-4 flex flex-col text-slate-100">
      <div>
        <span className="uppercase">seven-byte</span>
      </div>

      <div className="flex  border border-white items-center justify-around p-2">
        <div className="border border-white rounded-full max-w-16 max-h-64">
          image
        </div>

        <span>Igor Zoio</span>
      </div>

      <div className="w-full border border-white"></div>

      <nav className="h-full">
        <ul className="flex flex-col gap-3">
          <li className="hover:underline cursor-pointer ">Vendas</li>
          <li className="hover:underline cursor-pointer">Relatórios</li>
          <li className="hover:underline cursor-pointer">
            Cadastro de Produtos
          </li>
          <li className="hover:underline cursor-pointer">
            Cadastro de Usuários
          </li>
        </ul>
      </nav>

      <div className="w-full border border-white"></div>
      <span className="hover:underline cursor-pointer">Sair</span>
    </div>
  );
};
