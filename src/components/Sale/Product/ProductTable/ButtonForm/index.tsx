import { FiCheckCircle, FiXCircle } from "react-icons/fi";

interface IProps {
  buttonType: "register" | "cancel";
}

export const ButtonForm: React.FC<IProps> = ({ buttonType }) => {
  return (
    <>
      {buttonType === "cancel" ? (
        <button className="btn  btn-error rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-red-500 hover:text-black">
          <FiXCircle fontSize={"24px"} className="mr-2" fontWeight={"bolder"} />
          Cancelar
        </button>
      ) : (
        <button className="btn  btn-success rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-green-500  hover:text-black">
          <FiCheckCircle
            fontSize={"24px"}
            className="mr-2"
            fontWeight={"bolder"}
          />
          Cadastrar
        </button>
      )}
    </>
  );
};
