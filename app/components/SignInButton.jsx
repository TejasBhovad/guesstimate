"use client";
import { signIn } from "next-auth/react";
const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
    >
      Sign in
    </button>
  );
};

export default SignInButton;
