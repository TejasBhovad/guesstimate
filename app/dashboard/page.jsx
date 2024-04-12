"use client";
import { ScoreContext } from "@/app/context/context-wrapper";
import SpiderChart from "../components/SpiderChart";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import SignInButton from "../components/SignInButton";
import SignOutButton from "../components/SignOutButton";
import { getUser } from "../query/user";

const Page = () => {
  const { data: session, status } = useSession();
  const { highscore } = useContext(ScoreContext);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [totalCardsPlayed, setTotalCardsPlayed] = useState(0);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        if (status === "authenticated") {
          const user = await getUser(session.user.email);
          setGamesPlayed(user.stats.gamesPlayed);
          setIncorrectGuesses(user.stats.incorrectGuesses);
          setTotalCardsPlayed(user.stats.totalCardsPlayed);
        } else {
          const userStats = JSON.parse(localStorage.getItem("userStats"));
          if (userStats) {
            setGamesPlayed(userStats.gamesPlayed);
            setIncorrectGuesses(userStats.incorrectGuesses);
            setTotalCardsPlayed(userStats.totalCardsPlayed);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserStats();
  }, [status, session]);

  return (
    <div className="text-white w-full h-full flex flex-col items-center justify-center">
      {/* <div className="w-1/2 p-4">
        <div className="flex flex-col gap-2">
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
      </div>
      <div className="w-1/2 p-4 ">
        <SpiderChart
          highscore={highscore}
          gamesPlayed={gamesPlayed}
          incorrectGuesses={incorrectGuesses}
          totalCardsPlayed={totalCardsPlayed}
          width={400}
          height={400}
        />
      </div> */}
      <div className="h-full sm:h-2/3 w-full  flex sm:flex-row flex-col items-center justify-center sm:max-h-80 ">
        <div className="grid md:grid-cols-2 grid-cols-1 sm:h-full h-2/3 sm:w-2/3 w-full  p-4 gap-4">
          <div className="bg-white h-full w-full rounded-lg flex flex-col text-buttonColor items-center justify-center">
            <span className="font-black text-7xl">{gamesPlayed}</span>
            <div className="bg-white w-full rounded-lg flex items-center justify-center font-bold">
              total games
            </div>
          </div>
          <div className="bg-white h-full w-full rounded-lg flex flex-col text-[#0EB148] items-center justify-center">
            <span className="font-black text-7xl">
              {totalCardsPlayed / gamesPlayed}
            </span>
            <div className="bg-white w-full rounded-lg flex items-center justify-center font-bold">
              mean correct guesses
            </div>
          </div>
          <div className="bg-white h-full w-full rounded-lg flex flex-col text-buttonColor items-center justify-center">
            <span className="font-black text-7xl">{totalCardsPlayed}</span>
            <div className="bg-white w-full rounded-lg flex items-center justify-center font-bold">
              cards guessed
            </div>
          </div>
          <div className="bg-white h-full w-full rounded-lg flex flex-col text-[#FF9900] items-center justify-center">
            <span className="font-black text-7xl">{highscore}</span>
            <div className="bg-white w-full rounded-lg flex items-center justify-center font-bold">
              highscore
            </div>
          </div>
        </div>
        <div className="sm:h-full h-1/3 aspect-square  flex items-center justify-center">
          <div className="bg-buttonColor rounded-xl">
            <SpiderChart
              className="w-full h-full"
              highscore={highscore}
              gamesPlayed={gamesPlayed}
              incorrectGuesses={incorrectGuesses}
              totalCardsPlayed={totalCardsPlayed}
            />
          </div>
        </div>
      </div>
      {/* absoluet divs to place sign ou button at bottom rigth */}
      <div className="absolute bottom-4 right-4">
        {status === "loading" ? (
          <span>Loading...</span>
        ) : session && status === "authenticated" ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <>
            <span>Sign in to save progress</span>
            <SignInButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
