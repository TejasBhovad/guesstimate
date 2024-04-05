"use client";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ position, selected, number }) => {
  return (
    <div className="flex flex-col absolute">
      <motion.div
        className="w-72 h-96 bg-white rounded-lg shadow-lg p-2 card"
        initial={{ opacity: 0, x: 200, rotate: 30 }}
        animate={{
          opacity: 1,
          x: position.x,
          y: position.y,
          rotate: position.rotate,
          //   make red is selected
          backgroundColor: selected ? "#FDA4AF" : "white",
        }}
        transition={{ type: "spring", stiffness: position.x === 0 ? 120 : 60 }} // adjust stiffness based on position.x
      >
        <span className="font-semibold">Card {number}</span>
      </motion.div>
    </div>
  );
};

export default Card;
