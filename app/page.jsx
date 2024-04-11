"use client";
import React from "react";
import Link from "next/link";
const page = () => {
  const categories = [
    { name: "Games", href: "/play/game" },
    { name: "Movies", href: "/play/movie" },
    { name: "Music", href: "/play/music" },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full py-2">
      <h1 className="text-4xl mb-6 font-black italic">Choose a category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={category.href}>
            <div className="bg-white p-6 rounded-lg text-black text-center shadow-md hover:scale-105 transition-all duration-250 outline-4 outline-buttonColor outline font-semibold italic">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default page;
