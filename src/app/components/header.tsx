import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-around items-center px-6 py-4 relative">
      <ul className="flex gap-x-4 font-medium text-slate-600 ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <h1 className="font-bold text-lg text-blue-900">Landing</h1>
      </div>
      <div>
        <button className="text-sm bg-blue-950 text-slate-100 px-24 py-2 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
