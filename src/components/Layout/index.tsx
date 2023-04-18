interface IProps {
  children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <header>batata</header>

      <main>{children}</main>
    </div>
  );
};
