export const ClientForm = () => {
  return (
    <div className="flex flex-col border w-full  mt-4 mb-4 rounded p-4 text-center">
      <span>Clientes</span>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 selection:border mt-4">
        <input
          type="text"
          id="name"
          className="rounded px-4 h-8"
          placeholder="Nome Completo"
        />

        <input
          type="text"
          id="clientId"
          className="rounded px-4 h-8"
          placeholder="CPF/RG"
        />

        <input
          type="tel"
          id="phone"
          className="rounded px-4 h-8"
          placeholder="Telefone"
        />

        <input
          type="email"
          id="email"
          className="rounded px-4 h-8"
          placeholder="E-mail"
        />
      </div>
    </div>
  );
};
