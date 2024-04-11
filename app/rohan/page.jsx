import React from "react";
import Gamecard from "../components/Gamecard";
import NamePlate from "../components/NamePlate";
import Explore from "../components/Explore";
import { InfiniteMovingCards } from "../components/MovingCards";
const page = () => {
  return (
    <div class="w-full h-full flex flex-col items-center justify-start  ">
      <div class="border-2 flex items-center justify-center text-4xl font-extrabold border-black bg-white rounded-full w-1/3 h-24">
        <NamePlate />
      </div>

      <div class="pt-28">
        <Gamecard />
      </div>

      <div className="pt-20">
        <Explore />
      </div>
      <div className="t">
        <InfiniteMovingCards />
      </div>
    </div>
  );
};

export default page;
