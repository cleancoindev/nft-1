import React from "react";
import logo from "./images/logo.png";

function Header() {
  return (
    <header class="font-bol" style={{background: '#5B005C'}}>
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" class="flex items-center mb-4 md:mb-0">
          <img src={logo} />
          <span class="ml-3 text-xl text-white">Showtime</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <span class="mr-5 text-white px-5 py-2 rounded-md">❤️ 87/100 Likes left</span>
          <a href="/" class="mr-5 hover:text-black bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded-md">Leaderboard</a>
        </nav>
        <button class="inline-flex items-center bg-pink-600 border-0 py-2 px-5 focus:outline-none hover:bg-pink-700 rounded-md text-white text-base mt-4 md:mt-0">Sign in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
