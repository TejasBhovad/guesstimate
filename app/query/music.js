"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getSongs = async () => {
  try {
    console.log("getting music data");

    const response = await fetch(`/api/music/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const songs = await response.json();
    return songs;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

export { getSongs };
