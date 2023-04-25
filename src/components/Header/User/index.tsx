import { memo } from "react";

export const User = () => {
  return (
    <div className="flex  border border-white items-center justify-around p-2">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/59975691?v=4" />
        </div>
      </div>

      <span>Igor Zoio</span>
    </div>
  );
};

export default memo(User);
