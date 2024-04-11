import React from 'react'

const Leaderboard = () => {
  const data = [
    { name: 'User 1', score: 100 },
    { name: 'User 2', score: 90 },
    { name: 'User 3', score: 80 },
    { name: 'User 4', score: 70 },
    { name: 'User 5', score: 60 },
    { name: 'User 6', score: 100 },
    { name: 'User 7', score: 90 },
    { name: 'User 8', score: 80 },
    { name: 'User 9', score: 70 },
    { name: 'User 10', score: 60 },
    // Add more data as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Leaderboard</h1>
      <div className="mt-10">
        <table className="table-auto w-3/4 mx-auto bg-white rounded-lg shadow-md text-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-blue-500 text-black border-r-2 border-white">Player Name</th>
              <th className="px-4 py-2 bg-blue-500 text-black">High Score</th>
            </tr>
          </thead>
          <tbody>
            {data.sort((a, b) => b.score - a.score).map((item, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="border px-4 py-2 bg-yellow-500 border-r-2 border-white">{item.name}</td>
                <td className="border px-4 py-2 bg-yellow-500">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leaderboard