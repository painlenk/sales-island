export const ClientForm = () => {
  return (
    <div className="flex flex-col w-11/12 mt-4 mb-4 rounded-lg p-4 text-center bg-stone-800 border border-stone-600">
      <span className="text-cyan-400">Clientes</span>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 selection:border mt-4">
        <input
          type="text"
          placeholder="Nome Completo"
          className="input input-bordered  w-full  rounded-lg"
        />

        <input
          type="text"
          placeholder="RG ou CPF"
          className="input input-bordered  w-full  rounded-lg"
        />

        <input
          type="text"
          placeholder="Telefone"
          className="input input-bordered  w-full  rounded-lg"
        />

        <input
          type="email"
          placeholder="email"
          className="input input-bordered  w-full  rounded-lg"
        />
      </div>
    </div>
  );
};
