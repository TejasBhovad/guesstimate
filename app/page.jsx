"use client";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";

const Page = () => {
  const [cards, setCards] = useState([{ x: 0, y: 0, rotate: 5 }]);
  const [cardCount, setCardCount] = useState(0);

  const handleClick = () => {
    setCards((prevCards) => {
      // Create a copy of the previous cards
      const newCards = [...prevCards];
      // Target the right-hand card and change its position
      newCards[newCards.length - 1] = {
        ...newCards[newCards.length - 1],
        x: -window.innerWidth / 2,
        rotate: newCards.length % 2 === 0 ? 2.5 : -2.5,
      };
      newCards.push({ x: 0, y: 0, rotate: 5 });

      return newCards;
    });
  };
  // center leftmost stack of cards on leftmost center
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
  };

  return (
    <div className="w-full h-full flex overflow-x-hidden pt-16">
      hfhfhfh
      {/* abslte score card */}
      {/* <div className="absolute top-0 left-0 p-4">
        <span className="font-semibold">
          Score:{" "}
          {
            // length of cards array minus 1
            cards.length - 1
          }
        </span>
      </div> */}
      <div className="w-1/2 h-full flex items-center justify-center overflow-x-hidden">
        {cards.slice(0, cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
          />
        ))}
      </div>
      <div className="w-1/2 h-full bg-blue-300 flex items-center justify-center overflow-x-hidden">
        {cards.slice(cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
          />
        ))}
        <div className="control absolute z-30">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleClick}
          >
            Move Card
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
            onClick={handleAlert}
          >
            Lose Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
