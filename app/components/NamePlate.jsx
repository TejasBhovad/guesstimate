import React from "react";
import QuestionMark from "./icons/QuestionMark";

const NamePlate = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-2 italic bg-white w-auto p-3 rounded-xl">
        <div className="text-5xl font-black">Guesstimate</div>
        <div className="">
          <QuestionMark />
        </div>
      </div>
    </div>
  );
};

export default NamePlate;
