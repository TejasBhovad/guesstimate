import React from "react";
import NamePlate from "./components/NamePlate";

import GameIcon from "./components/icons/GameIcon";
import MoviesIcon from "./components/icons/MoviesIcon";
import MusicIcon from "./components/icons/MusicIcon";
import GoogleIcon from "./components/icons/GoogleIcon";

import CategoryCard from "./components/GameCard";
const page = () => {
  const list = [
    {
      link: "/play/music",
      title: "Music",
      logo: <MusicIcon />,
    },
    {
      link: "/play/game",
      title: "Game",
      logo: <GameIcon />,
    },
    {
      link: "/play/movie",
      title: "Movie",
      logo: <MoviesIcon />,
    },
    {
      link: "/play/google",
      title: "Google",
      logo: <GoogleIcon />,
    },
  ];
  return (
    <div className="w-full h-full items-center justify-center flex">
      <div className="w-full h-4/5 flex gap-12 flex-col">
        <NamePlate />
        <div className=" flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 items-center justify-center">
            {list.map((item, index) => (
              <CategoryCard
                key={index}
                name={item.title}
                logo={item.logo}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
