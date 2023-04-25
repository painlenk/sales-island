export const ProductTable = () => {
  return (
    <div className="rounded-lg ">
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th>COD</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qtd</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>001</th>
            <td>folha simples branca</td>
            <td>R$ 0.50</td>
            <td>2</td>
            <td>R$ 1.00</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>001</th>
            <td>folha simples branca</td>
            <td>R$ 0.50</td>
            <td>2</td>
            <td>R$ 1.00</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>001</th>
            <td>folha simples branca</td>
            <td>R$ 0.50</td>
            <td>2</td>
            <td>R$ 1.00</td>
          </tr>
          <tr>
            <th>001</th>
            <td>folha simples branca</td>
            <td>R$ 0.50</td>
            <td>2</td>
            <td>R$ 1.00</td>
          </tr>
          <tr>
            <th>001</th>
            <td>folha simples branca</td>
            <td>R$ 0.50</td>
            <td>2</td>
            <td>R$ 1.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
