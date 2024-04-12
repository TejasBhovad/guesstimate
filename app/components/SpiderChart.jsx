// SpiderChart.jsx
import * as d3 from "d3";
import { useEffect } from "react";

const SpiderChart = ({
  highscore,
  gamesPlayed,
  incorrectGuesses,
  totalCardsPlayed,
  height = 300,
  width = 300,
}) => {
  useEffect(() => {
    if (
      highscore !== null &&
      gamesPlayed !== null &&
      incorrectGuesses !== null &&
      totalCardsPlayed !== null
    ) {
      const spiderChartData = [
        highscore,
        gamesPlayed,
        incorrectGuesses,
        totalCardsPlayed,
      ];
      // const width = 600;
      // const height = 600;
      const svg = d3
        .select("#spider-chart")
        .attr("width", width)
        .attr("height", height)
        .style("background-color", "")
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
      const radius = 100;
      const dataLabels = [
        "Highscore",
        "Games Played",
        "Incorrect Guesses",
        "Total Cards Played",
        "Leaderboard",
      ];
      const pentagonVertices = Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 5;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return { x, y };
      });
      pentagonVertices.forEach((vertex, i) => {
        const nextVertex = pentagonVertices[(i + 1) % 5];
        svg
          .append("line")
          .attr("x1", vertex.x)
          .attr("y1", vertex.y)
          .attr("x2", nextVertex.x)
          .attr("y2", nextVertex.y)
          .style("stroke", "white")
          .style("stroke-width", 2);

        svg
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", vertex.x)
          .attr("y2", vertex.y)
          .style("stroke", "white")
          .style("stroke-width", 2);

        const labelX = (vertex.x + nextVertex.x) / 2;
        const labelY = (vertex.y + nextVertex.y) / 2;
        svg
          .append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .text(dataLabels[i])
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "middle")
          .attr("fill", "white")
          .style("font-size", "14px");
      });

      const maxScore = Math.max(...spiderChartData);
      const dataPoints = spiderChartData.map((d, i) => {
        const angle = (i * Math.PI * 2) / spiderChartData.length;
        const x = ((radius * d) / maxScore) * Math.cos(angle);
        const y = ((radius * d) / maxScore) * Math.sin(angle);
        return { x, y };
      });

      const line = d3
        .line()
        .x((d) => d.x)
        .y((d) => d.y)
        .curve(d3.curveLinearClosed);

      svg
        .append("path")
        .datum(dataPoints)
        .attr("d", line)
        .attr("fill", "rgba(71, 204, 204, 0.4)");
      // 71, 204, 204
    }
  }, [highscore, gamesPlayed, incorrectGuesses, totalCardsPlayed]);

  return <svg id="spider-chart" width={width} height={height}></svg>;
};

export default SpiderChart;
