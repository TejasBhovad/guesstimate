import React from "react";
import QuestionMark from "./icons/QuestionMark";

const NamePlate = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-1 italic ">
        <div className=" ">Guesstimate</div>
        <div className="">
          <QuestionMark />
        </div>
      </div>
    </div>
  );
};

export default NamePlate;
