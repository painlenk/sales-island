export const Nav = () => {
  return (
    <nav className="h-full">
      <ul className="flex flex-col gap-3">
        <li className="hover:underline cursor-pointer ">Vendas</li>
        <li className="hover:underline cursor-pointer">Relatórios</li>
        <li className="hover:underline cursor-pointer">Cadastro de Produtos</li>
        <li className="hover:underline cursor-pointer">Cadastro de Usuários</li>
      </ul>
    </nav>
  );
};
