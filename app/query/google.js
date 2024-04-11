"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getGoogle = async () => {
  try {
    console.log("getting google data");

    const response = await fetch(`/api/google/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const google = await response.json();
    return google;
  } catch (error) {
    console.error("Failed to fetch google data", error);
  }
};

export { getGoogle };
