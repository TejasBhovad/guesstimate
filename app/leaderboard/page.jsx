"use client";
import { useState, useEffect } from "react";
import { getLeaderboard } from "../query/user";

const Leaderboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getLeaderboard().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="p-4 ">
      <h1 className="text-4xl font-bold mb-10 text-center text-buttonColor">
        Leaderboard
      </h1>
      <div className="mt-10">
        <table className="table-auto w-3/4 mx-auto rounded-xl shadow-md text-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white bg-buttonColor border-r-4 border-buttonColor">
                Player Name
              </th>
              <th className="px-4 py-2 text-white bg-buttonColor border-r-4 border-buttonColor">
                High Score
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) => b.score - a.score)
              .map((item, index) => (
                <tr key={index} className="bg-white bg-opacity-50">
                  <td className="border px-4 py-2 text-buttonColor border-r-2 border-buttonColor">
                    {item.name}
                  </td>
                  <td className="border px-4 py-2 text-buttonColor border-r-2 border-buttonColor">
                    {item.highscore}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
