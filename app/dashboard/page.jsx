"use client";
import { ScoreContext } from "@/app/context/context-wrapper";
import * as d3 from "d3";
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

  useEffect(() => {
    if (highscore !== null && gamesPlayed !== null && incorrectGuesses !== null && totalCardsPlayed !== null) {
      const spiderChartData = [highscore, gamesPlayed, incorrectGuesses, totalCardsPlayed];
      const width = 600;
      const height = 600;
      const svg = d3.select("#spider-chart")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "")//if any of u want to set baground in graph,change here
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
      const radius = 200;
      const dataLabels = ["Highscore", "Games Played", "Incorrect Guesses", "Total Cards Played", "Leaderboard"];
      const pentagonVertices = Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 5;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
      });
      pentagonVertices.forEach((vertex, i) => {
        const nextVertex = pentagonVertices[(i + 1) % 5];
        svg.append("line")
          .attr("x1", vertex.x)
          .attr("y1", vertex.y)
          .attr("x2", nextVertex.x)
          .attr("y2", nextVertex.y)
          .style("stroke", "black") //if any of u want change colour of edges of pentagon,change here
          .style("stroke-width", 1);

        svg.append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", vertex.x)
          .attr("y2", vertex.y)
          .style("stroke", "black") //if any of u want change colour of 5 axis,change here
          .style("stroke-width", 1);

        const labelX = (vertex.x + nextVertex.x) / 2;
        const labelY = (vertex.y + nextVertex.y) / 2;
        svg.append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .text(dataLabels[i])
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("fill", "black")
          .style("font-size", "10px");
      });

      const maxScore = Math.max(...spiderChartData);
      const dataPoints = spiderChartData.map((d, i) => {
        const angle = (i * Math.PI * 2) / spiderChartData.length;
        const x = (radius * d / maxScore) * Math.cos(angle);
        const y = (radius * d / maxScore) * Math.sin(angle);
        return { x, y };
      });

      const line = d3.line()
        .x(d => d.x)
        .y(d => d.y)
        .curve(d3.curveLinearClosed);

      svg.append("path")
        .datum(dataPoints)
        .attr("d", line)
        .attr("fill", "rgba(255, 165, 0, 0.5)"); ////if any of u want plot area colour,change here
    }
  }, [highscore, gamesPlayed, incorrectGuesses, totalCardsPlayed]);

  return (
    <div className="text-white w-full h-full flex flex-row">
      <div className="w-1/2 p-4">
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
        <svg id="spider-chart" width={600} height={600}></svg>
      </div>
    </div>
  );
};

export default Page;