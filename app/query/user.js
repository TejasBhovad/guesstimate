"use server";
// Function to get the user's Data by email
const getUser = async (email) => {
  try {
    console.log("getting user data: ", email);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/user/fetch`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    );
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/user/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error("Failed to upload user data", error);
  }
};

export { getUser, updateUser };
