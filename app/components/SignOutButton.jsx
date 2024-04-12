"use client";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className=" text-buttonColor font-semibold py-1 px-4 rounded bg-white hover:bg-buttonColor hover:text-white transition duration-400 ease-in-out"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
