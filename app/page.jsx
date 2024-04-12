"use client";
import React from "react";
import Gamecard from "./components/Gamecard";
import NamePlate from "./components/NamePlate";
import Explore from "./components/Explore";

const page = () => {
  return (
    <div class="w-full h-full flex flex-col items-center justify-start gap-20 ">
      <div class="border-2 flex items-center justify-center text-4xl font-extrabold border-black bg-white rounded-full w-1/3 h-24 ">
        <NamePlate />
      </div>

      <div class="">
        <Gamecard />
      </div>

      <div className="">
        <Explore />
      </div>
    </div>
  );
};
export default page;
