import React, { useState, useEffect, useContext } from "react";
import _ from "lodash";
//import nft from "./images/nft.png";
//import nft2 from "./images/nft-2.png";
//import uni from "./images/uni.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import share from "./images/share.svg";
import arrow from "./images/arrow.png";
import backend from "../api/backend";
import { Context as AuthContext } from "../context/AuthContext";

const Featured = () => {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [featuredLikedItems, setFeaturedLikedItems] = useState([]);

  const {
    like,
    unlike,
    likeCountsChanged,
    state: { mylikes, did },
  } = useContext(AuthContext);

  // Load content
  useEffect(() => {
    const getFeaturedItems = async () => {
      const response = await backend.get("/v1/featured");
      setFeaturedItems(
        response.data.data.filter((item) => item.image_url != null)
      );
    };

    getFeaturedItems();
  }, []);

  // Augment content with my like status
  useEffect(() => {
    var newFeaturedLikedItems = [];

    if (featuredItems.length > 0 && mylikes) {
      _.forEach(featuredItems, function (item) {
        item.liked = false;

        _.forEach(mylikes, function (like) {
          if (
            item.asset_contract.address === like.contract &&
            item.token_id === like.token_id
          ) {
            item.liked = true;
          }
        });

        newFeaturedLikedItems.push(item);
      });
      setFeaturedLikedItems(newFeaturedLikedItems.slice(0, 11));
    }
  }, [featuredItems, mylikes]);

  const handleLike = async ({
    contract,
    token_id,
    creator_address,
    creator_name,
    creator_img_url,
  }) => {
    like({ contract, token_id });

    var newFeaturedItems = [...featuredItems];
    _.forEach(newFeaturedItems, function (item) {
      if (
        item.asset_contract.address === contract &&
        item.token_id === token_id
      ) {
        item.showtime.like_count = item.showtime.like_count + 1;
      }
    });
    setFeaturedItems(newFeaturedItems);

    await backend.post(
      `/v1/token/${contract}/${token_id}`,
      JSON.stringify({
        action: "like",
        creator_address: creator_address,
        creator_name: creator_name,
        creator_img_url: creator_img_url,
      }),
      {
        headers: { Authorization: "Bearer " + did },
      }
    );

    likeCountsChanged();
  };

  const handleUnlike = async ({ contract, token_id }) => {
    unlike({ contract, token_id });

    var newFeaturedItems = [...featuredItems];
    _.forEach(newFeaturedItems, function (item) {
      if (
        item.asset_contract.address === contract &&
        item.token_id === token_id
      ) {
        item.showtime.like_count = item.showtime.like_count - 1;
      }
    });
    setFeaturedItems(newFeaturedItems);

    await backend.post(
      `/v1/token/${contract}/${token_id}`,
      JSON.stringify({ action: "unlike" }),
      {
        headers: { Authorization: "Bearer " + did },
      }
    );

    likeCountsChanged();
  };

  return (
    <section className="bg-black font-book text-white" id="discover">
      <div className="lg:px-32 px-5 py-20 mx-auto">
        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest font-bol uppercase text-center">
          Discover
        </h1>
        <div className="flex flex-wrap -m-4 ">
          {featuredLikedItems.length === 0 ? (
            <h1 className="text-xl font-bol mb-2 text-center">
              Loading items...
            </h1>
          ) : (
            featuredLikedItems.map((item, index) => {
              return index === 0 ? (
                <section
                  key={item.id}
                  className="bg-black text-white mx-auto sm:w-full"
                >
                  <div className="container px-5 py-8 mx-auto ">
                    <div className="flex flex-wrap -mx-8 -mb-10 text-center">
                      <div className="sm:w-full mb-6">
                        <div className="h-96 overflow-hidden">
                          <img
                            alt="content"
                            className="object-cover object-center h-full w-full"
                            src={item.image_url}
                          />
                        </div>
                        <h2 className="title-font text-3xl mt-6 mb-3 font-bol">
                          {item.name}
                        </h2>

                        {item.creator ? (
                          <h2 className="tracking-widest text-md mb-1">
                            Created by{" "}
                            {item.creator.user
                              ? item.creator.user.username
                              : item.creator.address}
                          </h2>
                        ) : null}

                        <p className="leading-relaxed mb-3 text-gray-200">
                          Owned by{" "}
                          {item.owner.user
                            ? item.owner.user.username
                            : item.owner.address}
                        </p>

                        {item.liked ? (
                          <button
                            onClick={() =>
                              handleUnlike({
                                contract: item.asset_contract.address,
                                token_id: item.token_id,
                              })
                            }
                            className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"
                          >
                            <span className="text-pink-600">
                              <FaHeart className="h-6 w-6" />
                            </span>{" "}
                            <span className="text-pink-600 ml-2">
                              {item.showtime.like_count}
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleLike({
                                contract: item.asset_contract.address,
                                token_id: item.token_id,
                                creator_address: item.creator
                                  ? item.creator.address
                                  : null,
                                creator_name:
                                  item.creator && item.creator.user
                                    ? item.creator.user.username
                                    : null,
                                creator_img_url: item.creator
                                  ? item.creator.profile_img_url
                                  : null,
                              })
                            }
                            className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"
                          >
                            <span className="text-pink-600">
                              <FaRegHeart className="h-6 w-6" />
                            </span>{" "}
                            <span className="text-pink-600 ml-2">
                              {item.showtime.like_count}
                            </span>
                          </button>
                        )}
                        <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                          <img
                            src={share}
                            alt="share-button"
                            className="h-6 w-6 items-center flex"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <div key={item.id} className="p-4 md:w-1/2">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-64 md:h-36 w-full object-cover object-center"
                      src={item.image_url}
                      alt="nft"
                    />
                    <div className="mt-6 p-1">
                      <div className="float-right text-right">
                        <div>
                          {item.liked ? (
                            <button
                              onClick={() =>
                                handleUnlike({
                                  contract: item.asset_contract.address,
                                  token_id: item.token_id,
                                })
                              }
                              className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"
                            >
                              <span className="text-pink-600">
                                <FaHeart className="h-6 w-6" />
                              </span>{" "}
                              <span className="text-pink-600 ml-2">
                                {item.showtime.like_count}
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handleLike({
                                  contract: item.asset_contract.address,
                                  token_id: item.token_id,
                                  creator_address: item.creator
                                    ? item.creator.address
                                    : null,
                                  creator_name:
                                    item.creator && item.creator.user
                                      ? item.creator.user.username
                                      : null,
                                  creator_img_url: item.creator
                                    ? item.creator.profile_img_url
                                    : null,
                                })
                              }
                              className="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"
                            >
                              <span className="text-pink-600">
                                <FaRegHeart className="h-6 w-6" />
                              </span>{" "}
                              <span className="text-pink-600 ml-2">
                                {item.showtime.like_count}
                              </span>
                            </button>
                          )}
                          <button className="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg">
                            <img
                              src={share}
                              alt="share-button"
                              className="h-6 w-6 items-center flex"
                            />
                          </button>
                        </div>

                        <div className=" text-gray-200 text-right lg:ml-auto md:ml-0 ml-auto leading-none text-md py-3 ">
                          {item.last_sale && item.last_sale.payment_token
                            ? "Last sale Ξ" +
                              parseFloat(
                                item.last_sale.payment_token.eth_price
                              ).toFixed(3) +
                              " ($" +
                              parseInt(item.last_sale.payment_token.usd_price) +
                              ")"
                            : null}
                        </div>

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

                      <h1 className="text-xl font-bol mb-2">{item.name}</h1>
                      {item.creator ? (
                        <h2 className="tracking-widest text-md mb-1">
                          Created by{" "}
                          {item.creator.user
                            ? item.creator.user.username
                            : "[Unnamed]"}
                        </h2>
                      ) : null}

                      <p className="leading-relaxed mb-3 text-gray-200">
                        Owned by{" "}
                        {item.owner.user
                          ? item.owner.user.username
                          : "[Unnamed]"}
                      </p>
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
