import React from "react";
import Spotify from "./icons/Spotify";

const Gamecard = () => {
  return (
    <div className="flex justify-center  ">
      {/* make the card square shaped */}

      <div className="  flex flex-col justify-center items-center bg-white bg-opacity-85  p-2 rounded-3xl border-8 border-green-500 border-opacity-50 w-52 h-52">
        <div className="justify-center flex  w-full h-2/3 items-center ">
          <Spotify />
        </div>
        <div className="flex flex-col justify-center items-center h-1/3 w-full ">
          <p className="text-black font-bold">Game Description</p>
          <span className=" text-green-400">plays</span>
        </div>
      </div>
    </div>
  );
};

export default Gamecard;
