import { Header } from "../Header";
interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex bg-neutral-900 ">
      <header className=" w-1/5 h-full bg-stone-800 border-r border-stone-600">
        <Header />
      </header>
      {children}
    </div>
  );
};
