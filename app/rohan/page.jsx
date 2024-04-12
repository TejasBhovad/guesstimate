"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex justify-center mb-6">
      <Link href="/leaderboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Leaderboard
        </button>
      </Link>
    </div>
  );
};

export default page;
