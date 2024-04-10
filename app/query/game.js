"use client";

const getGames = async () => {
  try {
    console.log("getting game data");

    const response = await fetch(`/api/game/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const games = await response.json();
    console.log("games", games);
    return games;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

export { getGames };
