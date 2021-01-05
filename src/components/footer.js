import React from "react";
import logo from "./images/logo.png";
import {Link} from 'gatsby';

function Footer() {
  return (
    <footer className="font-bol bg-black">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link to="/" className="flex items-center md:justify-start justify-center text-white">
          <img src={logo} />
        </Link>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-purple-300 sm:py-2 sm:mt-0 mt-4">© 2020 Showtime</p>
      </div>
    </footer>
  );
}

export default Footer; 
