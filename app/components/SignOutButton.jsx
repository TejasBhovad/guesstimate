"use client";
import { signOut } from "next-auth/react";
const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
