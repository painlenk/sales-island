import { memo } from "react";

export const User = () => {
  return (
    <div className="flex  border border-white items-center justify-around p-2">
      <div className="border border-white rounded-full max-w-16 max-h-64">
        image
      </div>

      <span>Igor Zoio</span>
    </div>
  );
};

export default memo(User);
