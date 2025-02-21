import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="flex">
      <nav className="flex justify-between w-full items-center">
        <img src={logo} alt="logo" width="120px" className="rounded-3xl" />
        <div>
          <a href="#" className="text-2xl font-bold text-white">
            Home
          </a>
          <a href="#" className="text-2xl font-bold text-white">
            Matches
          </a>
          <a href="#" className="text-2xl font-bold text-white">
            Score
          </a>
        </div>
        <div>
          <button>login</button>
          ||
          <button>register</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
