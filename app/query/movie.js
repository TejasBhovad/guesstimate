"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getMovies = async (email) => {
  try {
    console.log("getting movie data");

    const response = await fetch(`/api/movie/fetch`, {
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
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};

export { getMovies };
