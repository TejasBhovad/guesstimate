"use client";

const getGames = async () => {
  try {
    console.log("getting game data");

    const response = await fetch(`/api/game/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Failed to fetch game data", error);
  }
};

export { getGames };
