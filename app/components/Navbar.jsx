"use client";
import React from "react";
import Profile from "./icons/Profile";
import Home from "./icons/Home";
import Trophy from "./icons/Trophy";
import { ScoreContext } from "../context/context-wrapper";
import { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const pathname = usePathname();
  const [highscoreUpdated, setHighscoreUpdated] = useState(false);
  const { score, highscore } = useContext(ScoreContext);

  useEffect(() => {
    setHighscoreUpdated(true);
    const timer = setTimeout(() => setHighscoreUpdated(false), 150);
    return () => clearTimeout(timer);
  }, [highscore]);
  return (
    <div className="w-full h-16 absolute bg-white flex items-center z-999 navbar">
      {/* if paths is dashboard then make link home */}
      {pathname === "/dashboard" ? (
        <Link href="/" className="ml-4 text-buttonColor fill=buttonColor">
          <Home className="text-buttonColor fill=buttonColor" />
        </Link>
      ) : (
        <Link
          href="/dashboard"
          className="ml-4 text-buttonColor fill=buttonColor"
        >
          <Profile className="text-buttonColor fill=buttonColor" />
        </Link>
      )}
      <div className="ml-16 flex-grow flex justify-center">
        <div className="bg-buttonColor px-4 py-2 rounded-lg">
          <p className="text-white">Score: {score}</p>
        </div>
      </div>
      <div
        className={`mr-8 bg-buttonColor bg-blue-200 px-4 py-2 rounded-lg flex items-center gap-2 ${
          highscoreUpdated ? "pulse" : ""
        }`}
      >
        <p className="text-white">{highscore}</p> <Trophy />
      </div>
    </div>
  );
};

export default Navbar;
