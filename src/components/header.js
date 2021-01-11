import React, { useContext, useEffect } from "react";
import logo from "./images/logo.png";
import { Context as AuthContext } from "../context/AuthContext";

const Header = () => {
  const {
    attemptSigninFromCookie,
    getMyLikes,
    state: { isLoggedIn, did, mylikes },
  } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoggedIn) {
      attemptSigninFromCookie();
    }
    if (mylikes === null) {
      getMyLikes();
    }
  }, [isLoggedIn, mylikes]);

  return (
    <header className="bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex items-center text-white mb-4 md:mb-0">
          {/*<img src={logo} alt="logo" />*/}
          <span className="ml-3 text-xl uppercase">Showtime</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="/#discover"
            className="mr-5 text-white hover:text-gray-200 px-5 py-2 rounded-md"
          >
            Discover
          </a>
          <a
            href="/#leaderboard"
            className="mr-5 text-white hover:text-gray-200 px-5 py-2 rounded-md"
          >
            Top Creators
          </a>
        </nav>
        {isLoggedIn ? (
          <a href="/profile">
            <button
              style={{
                background: "white",
              }}
              type="button"
              className="
              py-2 px-6 focus:outline-none bg-black hover:bg-gray-800 rounded"
            >
              Profile
            </button>
          </a>
        ) : (
          <a href="/#auth">
            <button
              style={{
                background:
                  "linear-gradient(to bottom right, #9E52FF, #FF27E9)",
              }}
              type="button"
              className="text-white py-2 px-6 focus:outline-none bg-black hover:bg-gray-800 rounded"
            >
              Sign in / Sign up
            </button>
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
