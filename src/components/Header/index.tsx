import { Divider } from "@/shared/Divider";
import Org from "./Org";
import User from "./User";
import { Nav } from "./Nav";
import { Logout } from "./Logout";

export const Header = () => {
  return (
    <div className="w-full h-full p-3 border border-black gap-4 flex flex-col text-slate-100">
      <Org title="Seven-Byte" />
      <User />
      <Divider />
      <Nav />
      <Divider />
      <Logout />
    </div>
  );
};
