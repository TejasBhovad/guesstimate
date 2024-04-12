import React from "react";
import Spotify from "./icons/Spotify";
import Link from "next/link";
import GameIcon from "./icons/GameIcon";
import MusicIcon from "./icons/MusicIcon";
import MoviesIcon from "./icons/MoviesIcon";

const Gamecard = () => {
  const categories = [
    { name: "Games", href: "/play/game", component: <GameIcon /> },
    { name: "Movies", href: "/play/movie", component: <MoviesIcon /> },
    { name: "Music", href: "/play/music", component: <MusicIcon /> },
  ];
  return (
    <div className="flex justify-center gap-4 ">
      {categories.map((category, index) => (
        <Link key={index} href={category.href}>
          <div className="flex flex-col justify-center items-center bg-white bg-opacity-85 p-2 rounded-3xl border-8 border-green-500 border-opacity-50 w-52 h-52 ">
            <div className="justify-center flex w-full h-2/3 items-center ">
              {category.component}
            </div>
            <div className="flex flex-col justify-center items-center h-1/3 w-full ">
              <p className="text-black font-bold">
                <div className="">{category.name}</div>
              </p>
              <span className=" text-green-400">plays</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gamecard;
