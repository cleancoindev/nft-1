import React from "react";
import logo from "./images/logo.png";

function Footer() {
  return (
    <footer class="font-bol bg-purple-100">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} />
        </a>
        <p class="text-sm text-bkack sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-purple-400 sm:py-2 sm:mt-0 mt-4">© 2020 Showtime</p>
      </div>
    </footer>
  );
}

export default Footer; 
