import { Divider } from "@/shared/Divider";
import Org from "./Org";
import User from "./User";
import { Nav } from "./Nav";
import { Logout } from "./Logout";

export const Header = () => {
  return (
    <div className="w-full h-full p-3  gap-4 flex flex-col text-slate-200">
      <Org title="Seven-Byte" />
      <User />
      <Divider color="#9ca3af" />
      <Nav />
      <Divider color="#9ca3af" />
      <Logout />
    </div>
  );
};
