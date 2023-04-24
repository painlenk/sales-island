import { FcUndo } from "react-icons/fc";

export const Logout = () => {
  return (
    <span className="hover:underline cursor-pointer hover:text-cyan-400 hover:bg-stone-700  flex gap-1 justify-items-start w-full pt-2 pb-2">
      <FcUndo fontSize={"24px"} className="mr-2" />
      Sair
    </span>
  );
};
