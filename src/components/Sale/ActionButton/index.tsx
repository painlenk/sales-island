import { FiCheckCircle, FiXCircle } from "react-icons/fi";

interface IProps {
  buttonType: "pay" | "cancel";
}

export const ActionButton: React.FC<IProps> = ({ buttonType }) => {
  return (
    <>
      {buttonType === "cancel" ? (
        <button className="btn  btn-error rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-red-500 hover:text-black">
          <FiXCircle fontSize={"24px"} className="mr-2" fontWeight={"bolder"} />
          Cancelar compra
        </button>
      ) : (
        <button className="btn  btn-success rounded-lg mt-4 max-w-xs m-auto hover:border hover:border-green-500  hover:text-black">
          <FiCheckCircle
            fontSize={"24px"}
            className="mr-2"
            fontWeight={"bolder"}
          />
          Realizar compra
        </button>
      )}
    </>
  );
};
