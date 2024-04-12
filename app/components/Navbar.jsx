"use client";
import React from "react";
import Profile from "./icons/Profile";
import Home from "./icons/Home";
import HomeIcon from "./icons/HomeIcon";
import Trophy from "./icons/Trophy";
import { ScoreContext } from "../context/context-wrapper";
import { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
      {pathname.match(/\/play\/.*/) && (
        // <Link href="/">

        // </Link>
        <AlertDialog>
          <AlertDialogTrigger>
            <motion.div
              whileTap={{ scale: 1.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="ml-4 text-buttonColor fill=buttonColor"
            >
              <HomeIcon />
            </motion.div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>This will take you to Home</AlertDialogTitle>
              <AlertDialogDescription>
                The Game in progress will be lost. Are you sure you want to
                continue to Home?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link href="/">
                <AlertDialogAction>Continue</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      {!pathname.match(/\/play\/.*/) &&
        (pathname === "/dashboard" ? (
          <AnimatePresence>
            <Link href="/">
              <motion.div
                whileTap={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ml-4 text-buttonColor fill=buttonColor"
              >
                <Home />
              </motion.div>
            </Link>
          </AnimatePresence>
        ) : (
          <Link href="/dashboard">
            <motion.div
              whileTap={{ scale: 1.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="ml-4 text-buttonColor fill=buttonColor"
            >
              <Profile />
            </motion.div>
          </Link>
        ))}

      <div className="ml-16 flex-grow flex justify-center">
        {pathname.match(/\/play\/.*/) && (
          <div className="bg-buttonColor px-4 py-2 rounded-lg">
            <p className="text-white">Score: {score}</p>
          </div>
        )}
      </div>
      <Link href="/leaderboard">
        <div
          className={`mr-8 bg-buttonColor bg-blue-200 px-4 py-2 rounded-lg flex items-center gap-2 ${
            highscoreUpdated ? "pulse" : ""
          }`}
        >
          <p className="text-white font-semibold">{highscore}</p> <Trophy />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
