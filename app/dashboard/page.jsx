"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect, useContext } from "react";
import { ScoreContext } from "@/app/context/context-wrapper";
import { getUser } from "../query/user";
import React from "react";
import SignInButton from "../components/SignInButton";
import SignOutButton from "../components/SignOutButton";

const page = () => {
  const { data: session, status } = useSession();
  const { highscore } = useContext(ScoreContext);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [totalCardsPlayed, setTotalCardsPlayed] = useState(0);

  useEffect(() => {
    if (status !== "authenticated") {
      const userStats = JSON.parse(localStorage.getItem("userStats"));
      if (userStats) {
        setGamesPlayed(userStats.gamesPlayed);
        setIncorrectGuesses(userStats.incorrectGuesses);
        setTotalCardsPlayed(userStats.totalCardsPlayed);
      }
    } else {
      getUser(session.user.email).then((user) => {
        setGamesPlayed(user.stats.gamesPlayed);
        setIncorrectGuesses(user.stats.incorrectGuesses);
        setTotalCardsPlayed(user.stats.totalCardsPlayed);
      });
    }
  }, [status]);

  return (
    <div className="text-white w-full h-full items-center justify-center flex flex-col gap-2">
      <div className="w-full items-center flex justify-center flex-col">
        <span>USER DATA</span>
        <span>Highscore: {highscore}</span>
        <span>Games Played: {gamesPlayed}</span>
        <span>Incorrect Guesses: {incorrectGuesses}</span>
        <span>Total Cards Played: {totalCardsPlayed}</span>
      </div>
      {status === "loading" ? (
        <span>Loading...</span>
      ) : session && status === "authenticated" ? (
        <>
          <span>Welcome, {session.user.name}</span>
          <SignOutButton />
        </>
      ) : (
        <>
          <span>Sign in to save progress</span>
          <SignInButton />
        </>
      )}
    </div>
  );
};

export default page;
