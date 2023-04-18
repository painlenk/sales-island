import { Header } from "../Header";

interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen flex bg-slate-500">
      <header className="border border-black w-1/6 h-full">
        <Header />
      </header>

      <main className="bg-red-400 flex-1">{children}</main>
    </div>
  );
};
