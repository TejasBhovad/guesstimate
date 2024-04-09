"use client";
// Upload brand data to the database
const uploadUser = async (data) => {
  try {
    console.log("uploading count data");
    const response = await fetch(`/api/user/create`, {
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
    console.error("Failed to upload count data", error);
  }
};

// Function to get the user's Data by email
const getUser = async (email) => {
  try {
    console.log("getting book data");

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
    console.log("uploading count data");
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
    console.error("Failed to upload count data", error);
  }
};

export { uploadUser, getUser, updateUser };
