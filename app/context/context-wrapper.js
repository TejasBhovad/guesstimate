"use client";
import { createContext, useState } from "react";

export const ScoreContext = createContext(0);

function ContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore, highscore, setHighscore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export default ContextProvider;
