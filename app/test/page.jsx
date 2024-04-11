"use client";
import { useState, useEffect } from "react";
import React from "react";
import { getLeaderboard } from "../query/user";
const page = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    getLeaderboard().then((res) => {
      setLeaderboard(res);
    });
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(leaderboard, null, 2)}</pre>
    </div>
  );
};

export default page;
