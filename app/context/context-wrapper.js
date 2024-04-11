"use client";
import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getUser } from "../query/user";
export const ScoreContext = createContext(0);

function ContextProvider({ children }) {
  const { data: session, status } = useSession();
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (status === "authenticated") {
      getUser(session.user.email).then((user) => {
        setHighscore(user.highscore);
      });
    } else {
      setHighscore(localStorage.getItem("highscore") || 0);
    }
  }, [status, session]);

  return (
    <ScoreContext.Provider value={{ score, setScore, highscore, setHighscore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export default ContextProvider;
