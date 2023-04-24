import { memo } from "react";

interface IProps {
  title: string;
}

const Org: React.FC<IProps> = ({ title }) => {
  return (
    <div>
      <h1 className="uppercase text-cyan-500 font-semibold">{title}</h1>
    </div>
  );
};

export default memo(Org);
