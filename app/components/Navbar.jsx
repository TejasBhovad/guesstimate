import React from "react";
import Profile from "./icons/Profile";
import Trophy from "./icons/Trophy";
const Navbar = () => {
  return (
    <div className="w-full h-16 absolute bg-white flex items-center">
      <div className="ml-4">
        <Profile />
      </div>

      <div className="ml-16 flex-grow flex justify-center">
        <div className="bg-buttonColor px-4 py-2 rounded-lg">
          <p className="text-white">Score : 69</p>
        </div>
      </div>

        <div className="mr-8 bg-buttonColor bg-blue-200 px-4 py-2 rounded-lg flex items-center">
          <Trophy/>
          <p className="text-white">: 420</p>
        </div>
    </div>
  );
};

export default Navbar;
