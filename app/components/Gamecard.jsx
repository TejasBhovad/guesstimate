"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const CategoryCard = ({ name, logo, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col justify-center items-center bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-3xl w-52 h-52"
  >
    <Link href={link}>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-3xl w-52 h-52">
        <div className="justify-center flex w-full h-2/3 items-center ">
          {logo}
        </div>
        <div className="flex flex-col justify-center items-center h-1/3 w-full ">
          <span className="font-bold text-2xl">{name}</span>
          <span className="text-buttonColor font-medium">play now</span>
        </div>
      </div>
    </Link>
  </motion.div>
);
export default CategoryCard;
