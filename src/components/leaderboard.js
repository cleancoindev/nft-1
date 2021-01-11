import React, { useState, useEffect, useContext } from "react";
import u1 from "./images/user1.png";
import u2 from "./images/user2.png";
import u3 from "./images/user3.png";
import u4 from "./images/user4.png";
import u5 from "./images/user5.png";
import { FaHeart } from "react-icons/fa";
import backend from "../api/backend";
import { Context as AuthContext } from "../context/AuthContext";

const Leaderboard = () => {
  const [topCreators, setTopCreators] = useState([]);

  const {
    state: { last_like_count_change },
  } = useContext(AuthContext);

  useEffect(() => {
    const getCreators = async () => {
      const response = await backend.get("/v1/leaderboard");
      setTopCreators(response.data.data);
    };

    getCreators();
  }, [last_like_count_change]);

  return (
    <section className="font-book bg-black text-white" id="leaderboard">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest font-bol uppercase">
            Top Creators
          </h1>
          {/*<div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <input
                type="text"
                placeholder="Search for an NFT..."
                id="nft"
                name="hero-field"
                className="w-full rounded focus:ring-2 focus:ring-pink-200 bg-transparent focus:bg-transparent border-2 border-gray-200 focus:border-pink-600 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
              Search
            </button>
  </div>*/}
        </div>
        <div className="flex flex-wrap -m-4 mx-auto" style={{ maxWidth: 700 }}>
          {topCreators.map((creator) => {
            return (
              <div key={creator.profile_id} className="p-4 lg:w-full flex ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="artist"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={creator.image_url}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h3 className="text-white mb-3 font-bol text-3xl">
                      {creator.name ? creator.name : "[Unnamed]"}
                    </h3>
                    <p>
                      <FaHeart className="h-6 w-6 inline mr-1" />{" "}
                      {creator.like_count}{" "}
                      {creator.like_count > 1 ? "likes" : "like"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/*
          <div className="p-4 lg:w-full flex text-center justify-center">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <button className="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                <span className="text-pink-600">
                  <FaHeart className="h-6 w-6" />
                </span>{" "}
                <span className="text-pink-600 ml-2">233</span>
              </button>
              <img
                alt="artist"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={u2}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-white mb-3 font-bol text-3xl">
                  Josie Bellini
                </h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-full flex text-center justify-center">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <button className="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                <span className="text-pink-600">
                  <FaHeart className="h-6 w-6" />
                </span>{" "}
                <span className="text-pink-600 ml-2">233</span>
              </button>
              <img
                alt="artist"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={u3}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-white mb-3 font-bol text-3xl">Fewocious</h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-full flex text-center justify-center">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <button className="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                <span className="text-pink-600">
                  <FaHeart className="h-6 w-6" />
                </span>{" "}
                <span className="text-pink-600 ml-2">233</span>
              </button>
              <img
                alt="artist"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={u4}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-white mb-3 font-bol text-3xl">
                  CoinArtist
                </h3>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-full flex text-center justify-center">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <button className="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                <span className="text-pink-600">
                  <FaHeart className="h-6 w-6" />
                </span>{" "}
                <span className="text-pink-600 ml-2">233</span>
              </button>
              <img
                alt="artist"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={u5}
              />
              <div className="flex-grow sm:pl-8">
                <h3 className="text-white mb-3 font-bol text-3xl">3LAU</h3>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
