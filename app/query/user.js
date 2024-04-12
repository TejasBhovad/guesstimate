"use client";
const getUser = async (email) => {
  try {
    console.log("getting user data: ", email);

    const response = await fetch(`/api/user/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data", error);
  }
};
const updateUser = async (data) => {
  try {
    console.log("uploading user data");
    const response = await fetch(`/api/user/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error("Failed to upload user data", error);
  }
};

const getLeaderboard = async () => {
  try {
    console.log("getting leaderboard data");

    const response = await fetch(`/api/user/leaderboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const leaderboard = await response.json();
    return leaderboard;
  } catch (error) {
    console.error("Failed to fetch leaderboard data", error);
  }
};

export { getUser, updateUser, getLeaderboard };
