interface IProps {
  color?: string;
}

export const Divider: React.FC<IProps> = ({ color = "black" }) => {
  return <div style={{ borderBottom: `1px solid ${color}` }}></div>;
};
