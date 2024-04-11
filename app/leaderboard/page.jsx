import React from 'react'

const leaderboard = () => {
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
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <ul>
        {data.sort((a, b) => b.score - a.score).map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.name}</span>: <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default leaderboard