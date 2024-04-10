"use client";
import React, { useState, useEffect, useContext } from "react";
import { getSongs } from "@/app/query/music";
import { getGames } from "@/app/query/game";
import { getMovies } from "@/app/query/movie";
import Card from "@/app/components/Card";
import { ScoreContext } from "@/app/context/context-wrapper";
import Arrow from "@/app/components/icons/Arrow";

const Page = ({ params }) => {
  const [data, setData] = useState([]);
  const { score, setScore, highscore, setHighscore } = useContext(ScoreContext);
  const [cards, setCards] = useState([{ x: 0, y: -75, rotate: 5 }]);
  const [cardCount, setCardCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [isHigher, setIsHigher] = useState(true);
  const fetchData = async () => {
    let res;
    if (params.slug === "music") {
      res = await getSongs();
    } else if (params.slug === "game") {
      res = await getGames();
    } else if (params.slug === "movie") {
      res = await getMovies();
    }

    res = res.sort(() => Math.random() - 0.5);
    setData((prevData) => [...prevData, ...res]);
  };
  useEffect(() => {
    fetchData();
  }, [params.slug]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  function formatNumber(num) {
    if (num >= 1000000) {
      return parseFloat((num / 1000000).toFixed(2)) + "M";
    } else if (num >= 1000) {
      return parseFloat((num / 1000).toFixed(2)) + "K";
    } else {
      return num;
    }
  }
  const getRelevantField = (item) => {
    if (params.slug === "music") {
      return item.streams;
    } else if (params.slug === "game") {
      return item.popularity;
    } else if (params.slug === "movie") {
      return item.grossRevenue;
    }
  };
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
      setCurrentCard(newCards.length - 2); // Update the current card

      // if stream is higher than previous stream
      if (
        data &&
        data[newCards.length - 2] &&
        data[newCards.length - 1] &&
        getRelevantField(data[newCards.length - 2]) >
          getRelevantField(data[newCards.length - 1])
      ) {
        setIsHigher(false);
      } else {
        setIsHigher(true);
      }

      // Fetch and append data every 10 cards
      if (newCards.length % 10 === 0) {
        fetchData();
        console.log("fetching new data");
      }

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
    setScore(0);
    setData([]);
    fetchData();
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
    updateHighscore(cards.length - 1 - 1);
  }, [cards.length]);

  useEffect(() => {
    if (isMounted) {
      handleClick();
    }
  }, [isMounted]);

  return (
    <div className="w-full h-full flex overflow-x-hidden">
      <div className="w-1/2 h-full flex items-center justify-center overflow-x-hidden flex flex-col border-r-4 border-opacity-75">
        {cards.slice(0, cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
            name={data && data[index] ? data[index].name : ""}
          />
        ))}
        <div className="w-full h-3/4 "></div>
        <div className="w-full h-1/4 flex items-center justify-center gap-4">
          <span className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white italic opacity-85 text-center">
            {data && data[currentCard]
              ? formatNumber(getRelevantField(data[currentCard]))
              : ""}{" "}
            {params.slug === "music" ? "Streams" : "Popularity"}{" "}
          </span>
          <span>{isHigher ? "Higher" : "Lower"}</span>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center overflow-x-hidden">
        {cards.slice(cardCount).map((position, index) => (
          <Card
            key={index}
            position={position}
            number={index}
            selected={index === cards.length - 1}
            name={
              data && data[index + cardCount]
                ? data[index + cardCount].name
                : ""
            }
            data={data && data[index + cardCount]}
          />
        ))}
        <div className="control z-30 w-full h-full">
          <div className="w-full h-3/4 "></div>
          <div className="w-full h-1/4 flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-32 xl:h-24 flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out border-4 border-white"
              onClick={() => {
                if (isHigher) {
                  handleClick();
                } else {
                  handleAlert();
                }
              }}
            >
              <Arrow />
            </button>
            <button
              className="w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-32 xl:h-24 flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out border-4 border-white"
              onClick={() => {
                if (isHigher) {
                  handleAlert();
                } else {
                  handleClick();
                }
              }}
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
