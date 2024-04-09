"use client";
import React from "react";
import Gamecard from "../components/Gamecard";
import { useEffect, useState } from "react";
import { getUser } from "../query/user";
import { uploadUser } from "../query/user";
import { updateUser } from "../query/user";
import { getSongs } from "../query/music";

const page = () => {
  const createUser = async () => {
    const data = {
      email: "rohanjoshijoshi50@gmail.com",
      name: "Rohan Joshi",
      image: "https://rohanjoshi.dev",
      highscore: 100,
      stats: {
        gamesPlayed: 10,
        correctGuesses: 5,
        totalCardsPlayed: 50,
      },
    };
    await uploadUser(data);
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUser("rohanjoshijoshi50@gmail.com");
      setUser(userData);
    };
    fetchUser();
  }, []);
  const updateUserData = async () => {
    const data = {
      email: "rohanjoshijoshi50@gmail.com",
      highscore: 2500,
      stats: {
        gamesPlayed: 20,
        correctGuesses: 10,
        totalCardsPlayed: 300,
      },
    };
    await updateUser(data);
  };
  const [songData, setSongData] = useState(null);
  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs();
      setSongData(songs);
    };
    fetchSongs();
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      {/* <Gamecard /> */}
      <button onClick={createUser}>Create User</button>
      {/* {user && <p>{JSON.stringify(user)}</p>} */}
      {songData && <p>{JSON.stringify(songData)}</p>}

      <button onClick={updateUserData}>Update User</button>
    </div>
  );
};

export default page;
