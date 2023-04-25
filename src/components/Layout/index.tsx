import { Header } from "../Header";
interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex">
      <header className=" w-1/5 h-full bg-stone-800 border-r border-stone-600 fixed">
        <Header />
      </header>
      {children}
    </div>
  );
};
