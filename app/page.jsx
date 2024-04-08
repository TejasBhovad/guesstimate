"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Arrow from "./components/icons/Arrow";
import { ScoreContext } from "./context/context-wrapper";
import { useContext } from "react";
const Page = () => {
  const { score, setScore, highscore, setHighscore } = useContext(ScoreContext);
  const [cards, setCards] = useState([{ x: 0, y: -75, rotate: 5 }]);
  const [cardCount, setCardCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleClick = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards[newCards.length - 1] = {
        ...newCards[newCards.length - 1],
        x: -window.innerWidth / 2,
        y: -75,
        rotate: newCards.length % 2 === 0 ? 2.5 : -2.5,
      };
      newCards.push({ x: 0, y: -75, rotate: 5 });

      return newCards;
    });
  };
  useEffect(() => {
    const resizeHandler = () => {
      setCards((prevCards) => {
        return prevCards.map((card, index) => {
          if (index === prevCards.length - 1) {
            return {
              ...card,
              x: 0,
            };
          } else {
            return {
              ...card,
              x: index < cardCount ? 0 : -window.innerWidth / 2,
            };
          }
        });
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [cardCount]);

  const handleAlert = () => {
    alert("You lose");
    // reset score context
    setScore(0);
    // reset cards
    setCards([{ x: 0, y: -100, rotate: 5 }]);
    handleClick();
  };

  const updateHighscore = (newScore) => {
    if (newScore > highscore) {
      setHighscore(newScore);
    }
  };

  useEffect(() => {
    setScore(cards.length - 1 - 1);
    // console.log("highscore updated", score, highscore);
    updateHighscore(cards.length - 1 - 1);
  }, [cards.length]);

  // enable handle click on load
  useEffect(() => {
    if (isMounted) {
      handleClick();
    }
  }, [isMounted]);

  return (
    <div className="w-full h-full flex overflow-x-hidden pt-16">
      <div className="w-1/2 h-full flex items-center justify-center overflow-x-hidden flex flex-col border-r-4 border-opacity-75">
        {cards.slice(0, cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
          />
        ))}
        <div className="w-full h-3/4 "></div>
        <div className="w-full h-1/4 flex items-center justify-center gap-4">
          <span className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white italic opacity-85 text-center">
            69420M Streams
          </span>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center overflow-x-hidden">
        {cards.slice(cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
          />
        ))}
        <div className="control z-30 w-full h-full">
          <div className="w-full h-3/4 "></div>
          <div className="w-full h-1/4 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-32 lg:h-24 flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out border-4 border-white"
              onClick={handleClick}
            >
              <Arrow />
            </button>
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-32 lg:h-24 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out border-4 border-white"
              onClick={handleAlert}
            >
              <div className="rotate-180">
                <Arrow />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
