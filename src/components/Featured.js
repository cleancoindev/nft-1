import React, { useState, useEffect } from "react";
//import nft from "./images/nft.png";
//import nft2 from "./images/nft-2.png";
//import uni from "./images/uni.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import share from "./images/share.svg";
import arrow from "./images/arrow.png";
import backend from "../api/backend";

const Featured = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const getFeaturedItems = async () => {
      const response = await backend.get("/v1/featured");
      setFeaturedItems(
        response.data.data.filter((item) => item.image_url != null)
      );
    };

    getFeaturedItems();
  }, []);

  return (
    <section className="bg-black font-book text-white">
      <div className="lg:px-32 px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {featuredItems.length === 0 ? (
            <h1 className="text-xl font-bol mb-2">Loading items...</h1>
          ) : (
            featuredItems.map((item) => {
              return (
                <div key={item.id} className="p-4 md:w-1/2">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-64 md:h-36 w-full object-cover object-center"
                      src={item.image_url}
                      alt="nft"
                    />
                    <div className="mt-6 p-1">
                      {item.creator ? (
                        <h2 className="tracking-widest text-md mb-1">
                          Created by{" "}
                          {item.creator.user
                            ? item.creator.user.username
                            : item.creator.address}
                        </h2>
                      ) : null}
                      <h1 className="text-xl font-bol mb-2">{item.name}</h1>

                      <p className="leading-relaxed mb-3 text-gray-200">
                        Owned by{" "}
                        {item.owner.user
                          ? item.owner.user.username
                          : item.owner.address}
                      </p>
                      <div className="flex items-center flex-wrap">
                        <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                          <span className="text-pink-600">
                            <FaHeart className="h-6 w-6" />
                          </span>{" "}
                          <span className="text-pink-600 ml-2">
                            {item.showtime.like_count}
                          </span>
                        </button>
                        <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                          <img
                            src={share}
                            alt="share-button"
                            className="h-6 w-6 items-center flex"
                          />
                        </button>

                        <span className="text-gray-200 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 ">
                          {item.last_sale && item.last_sale.payment_token
                            ? "Last sale Ξ" +
                              parseFloat(
                                item.last_sale.payment_token.eth_price
                              ).toFixed(3) +
                              " ($" +
                              parseInt(item.last_sale.payment_token.usd_price) +
                              ")"
                            : null}
                        </span>
                        {/*
                      <span className="text-gray-200 inline-flex items-center leading-none text-md">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>*/}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/*
          <div className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center"
                src={nft2}
                alt="nft"
              />
              <div className="mt-6 p-1">
                <h2 className="tracking-widest text-md mb-1">
                  LIL MIQUELA LIL
                </h2>
                <h1 className="text-xl font-bol mb-2">Rebirth of Venus</h1>
                <p className="leading-relaxed mb-3 text-gray-200">
                  Owned by leviathan
                </p>
                <div className="flex items-center flex-wrap">
                  <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                    <span className="text-pink-600">
                      <FaHeart className="h-6 w-6" />
                    </span>{" "}
                    <span className="text-pink-600 ml-2">233</span>
                  </button>
                  <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                    <img
                      src={share}
                      alt="share-button"
                      className="h-6 w-6 items-center flex"
                    />
                  </button>

                  <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                    Ξ 1539
                  </span>
                  <span className="text-gray-200 inline-flex items-center leading-none text-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center"
                src={uni}
                alt="nft"
              />
              <div className="mt-6 p-1">
                <h2 className="tracking-widest text-md mb-1">
                  DIGITAL COLLECTIBLES
                </h2>
                <h1 className="text-xl font-bol mb-2">The Uni Tape</h1>
                <p className="leading-relaxed mb-3 text-gray-200">
                  Owned by alex masmej
                </p>
                <div className="flex items-center flex-wrap">
                  <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                    <span className="text-pink-600">
                      <FaHeart className="h-6 w-6" />
                    </span>{" "}
                    <span className="text-pink-600 ml-2">233</span>
                  </button>
                  <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                    <img
                      src={share}
                      alt="share-button"
                      className="h-6 w-6 items-center flex"
                    />
                  </button>

                  <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                    Ξ 1000
                  </span>
                  <span className="text-gray-200 inline-flex items-center leading-none text-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center"
                src={nft2}
                alt="nft"
              />
              <div className="mt-6 p-1">
                <h2 className="tracking-widest text-md mb-1">LIL MIQUELA</h2>
                <h1 className="text-xl font-bol mb-2">Rebirth of Venus</h1>
                <p className="leading-relaxed mb-3 text-gray-200">
                  Owned by leviathan
                </p>
                <div className="flex items-center flex-wrap">
                  <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                    <span className="text-pink-600">
                      <FaHeart className="h-6 w-6" />
                    </span>{" "}
                    <span className="text-pink-600 ml-2">233</span>
                  </button>
                  <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                    <img
                      src={share}
                      alt="share-button"
                      className="h-6 w-6 items-center flex"
                    />
                  </button>

                  <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                    Ξ 159
                  </span>
                  <span className="text-gray-200 inline-flex items-center leading-none text-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <div className="h-full overflow-hidden">
              <img
                className="lg:h-64 md:h-36 w-full object-cover object-center"
                src={nft}
                alt="nft"
              />
              <div className="mt-6 p-1">
                <h2 className="tracking-widest text-md mb-1">LIL MIQUELA</h2>
                <h1 className="text-xl font-bol mb-2">Rebirth of Venus</h1>
                <p className="leading-relaxed mb-3 text-gray-200">
                  Owned by leviathan
                </p>
                <div className="flex items-center flex-wrap">
                  <button className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
                    <span className="text-pink-600">
                      <FaHeart className="h-6 w-6" />
                    </span>{" "}
                    <span className="text-pink-600 ml-2">233</span>
                  </button>
                  <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                    <img
                      src={share}
                      alt="share-button"
                      className="h-6 w-6 items-center flex"
                    />
                  </button>

                  <span className="text-gray-200 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-md pr-3 py-1 border-r-2 border-gray-200">
                    Ξ 159
                  </span>
                  <span className="text-gray-200 inline-flex items-center leading-none text-md">
                    <svg
                      className="w-4 h-4 mr-1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
        <button className="flex mx-auto text-black bg-white border-0 py-2 px-6 mt-10 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">
          <span
            style={{
              background: "linear-gradient(to bottom right, #524FFF, #FF24E9)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            Discover more artwork
          </span>{" "}
          <img src={arrow} alt="arrow" className="h-6 w-6 ml-3" />
        </button>
      </div>
    </section>
  );
};

export default Featured;
