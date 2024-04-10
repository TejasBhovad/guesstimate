"use client";

const getMovies = async () => {
  try {
    console.log("getting movie data");

    const response = await fetch(`/api/movie/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
