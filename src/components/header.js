import React, { useEffect } from "react";
import logo from "./images/logo.png";

const Header = () => {

  return (
    <header class="font-bol bg-black">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex items-center text-white mb-4 md:mb-0">
          <img src={logo} alt="logo" />
          <span class="ml-3 text-xl">Showtime</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/#leaderboard" class="mr-5 text-white hover:text-gray-200 px-5 py-2 rounded-md">Top Creators</a>
        </nav>
        <a href="/auth/"><button style={{ background: 'linear-gradient(to bottom right, #9E52FF, #FF27E9)' }} type="button" className="text-white py-2 px-6 focus:outline-none bg-black hover:bg-gray-800 rounded">Sign in</button></a>
      </div>
    </header>
  );
}

export default Header;
