"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getGames = async (email) => {
  try {
    console.log("getting game data");

    const response = await fetch(`/api/game/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify({
      //    ,
      //   }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

export { getGames };
