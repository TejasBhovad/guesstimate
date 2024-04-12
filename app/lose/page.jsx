"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [score, setScore] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (searchParams) {
      setScore(searchParams.get("score"));
      setCategory(searchParams.get("category"));
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="h-1/2 w-3/4 bg-white rounded-xl p-8 flex flex-col bg-opacity-25 backdrop-blur-sm gap-8">
        <span className="font-bold text-buttonColor text-2xl text-center">
          YOUR SCORE
        </span>
        <div className="w-full flex items-center justify-center">
          <span className="w-fit font-bold text-buttonColor text-9xl text-center px-8 py-4 bg-white rounded-3xl">
            {score}
          </span>
        </div>
        <div className="gap-3 w-full flex flex-col items-center justify-center font-semibold">
          <Link
            href={`/play/${category}`}
            className="w-full flex items-center justify-center"
          >
            <button className="w-1/2 h-12 bg-buttonColor text-white rounded-full hover:scale-105 transition-all duration-150 ease-in-out">
              Play Again
            </button>
          </Link>
          <Link href="/" className="w-full flex items-center justify-center">
            <button className="w-1/2 h-12 bg-buttonColor text-white rounded-full hover:scale-105 transition-all duration-150 ease-in-out">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
