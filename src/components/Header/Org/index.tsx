import { memo } from "react";

interface IProps {
  title: string;
}

const Org: React.FC<IProps> = ({ title }) => {
  return (
    <div>
      <h1 className="uppercase">{title}</h1>
    </div>
  );
};

export default memo(Org);
