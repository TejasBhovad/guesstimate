"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({ position, selected, number, name, data, category }) => {
  return (
    <div className="flex flex-col absolute">
      <motion.div
        // set shadow-lg to card when selected and shadow-md when not selected
        className={`w-48 h-72 sm:w-72 sm:h-96 bg-white rounded-xl card border-[12px] border-white flex flex-col ${
          selected ? "shadow-lg" : "shadow-md"
        }`}
        initial={{ opacity: 0, x: 200, y: -50, rotate: 30 }}
        animate={{
          opacity: 1,
          x: position.x,
          y: position.y,
          rotate: position.rotate,
          //   make red is selected
          backgroundColor: selected ? "#FDA4AF" : "yellow",
        }}
        transition={{ type: "spring", stiffness: position.x === 0 ? 120 : 60 }} // adjust stiffness based on position.x
      >
        <Image
          src={
            data && data.image !== ""
              ? data.image
              : category
              ? category === "google"
                ? "/google.png"
                : category === "music"
                ? "/music.png"
                : category === "game"
                ? "/game.jpg"
                : category === "movie"
                ? "/movies.jpg"
                : ""
              : ""
          }
          className="-z-20 absolute w-full h-full object-cover"
          alt=""
          width={200}
          height={200}
        />
        <div className="bg-black bg-opacity-60">
          {/* <span className="font-semibold">Card {number}</span> */}
          <span className="font-bold text-white">
            <div className="p-2 text-center">{name}</div>
          </span>
        </div>
        {/* json with formatting */}
        {/* <pre className="overflow-auto">{JSON.stringify(data, null, 2)}</pre> */}
      </motion.div>
    </div>
  );
};

export default Card;
