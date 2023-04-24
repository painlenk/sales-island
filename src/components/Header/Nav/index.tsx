export const Nav = () => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col gap-3">
        <li className="hover:underline cursor-pointer hover:text-cyan-400 ">
          Vendas
        </li>
        <li className="hover:underline cursor-pointer hover:text-cyan-400">
          Relatórios
        </li>
        <li className="hover:underline cursor-pointer hover:text-cyan-400">
          Cadastro de Produtos
        </li>
        <li className="hover:underline cursor-pointer hover:text-cyan-400">
          Cadastro de Usuários
        </li>
      </ul>
    </nav>
  );
};
