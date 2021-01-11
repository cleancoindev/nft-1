import React, { useEffect, useContext, useState } from "react";

import _ from "lodash";
import Featured from "../components/Featured";
import Leaderboard from "../components/Leaderboard";
import SEO from "../components/seo";
import { Link } from "gatsby";
import WalletButton from "../components/wallet";
import { Magic } from "magic-sdk";
import { Context as AuthContext } from "../context/AuthContext";
import Cookies from "universal-cookie";
import Layout from "../components/layout";
import backend from "../api/backend";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import share from "../components/images/share.svg";

const IndexPage = () => {
  const [ownedItems, setOwnedItems] = useState([]);
  const [ownedLikedItems, setOwnedLikedItems] = useState([]);

  const [likedItems, setLikedItems] = useState([]);
  const [likedLikedItems, setLikedLikedItems] = useState([]);

  const {
    attemptSigninFromCookie,
    like,
    unlike,
    likeCountsChanged,

    state: {
      my_address,
      my_name,
      my_img_url,
      mylikes,
      did,
      last_like_count_change,
    },
  } = useContext(AuthContext);

  // Load content
  useEffect(() => {
    if (did) {
      const getOwnedItems = async () => {
        const response = await backend.get(
          "/v1/owned?address=0x73113a65011acbad72730577defd95aaf268e22a",
          {
            headers: { Authorization: "Bearer " + did },
          }
        );
        setOwnedItems(
          response.data.data.filter((item) => item.image_url != null)
        );
      };

      getOwnedItems();
    }
  }, [last_like_count_change, did]);

  useEffect(() => {
    if (did) {
      const getLikedItems = async () => {
        const response = await backend.get(
          "/v1/liked?address=0x23d611dC505Ec08b086BE6Cbe8A24Cf1B758fF93",
          {
            headers: { Authorization: "Bearer " + did },
          }
        );
        setLikedItems(
          response.data.data.filter((item) => item.image_url != null)
        );
      };
      getLikedItems();
    }
  }, [last_like_count_change, did]);

  useEffect(() => {
    // create a token if we've been redirected here from magiclink
    (async () => {
      const m = new Magic("pk_test_7FF6C3036AF5DE22");

      try {
        await m.auth.loginWithCredential(window.location.search);
        const did = await m.user.generateIdToken({
          //setting 30 day expiration
          lifespan: 60 * 60 * 24 * 30,
        });
        const cookies = new Cookies();
        cookies.set("did", did, { path: "/" });
        attemptSigninFromCookie();
      } catch (e) {
        // Handle errors if required!
        //console.log(e);
      } finally {
        //attemptSigninFromCookie();
      }
    })();
  }, []);

  // Augment content with my like status
  useEffect(() => {
    var newOwnedLikedItems = [];

    if (ownedItems.length > 0 && mylikes) {
      _.forEach(ownedItems, function (item) {
        item.liked = false;

        _.forEach(mylikes, function (like) {
          if (
            item.asset_contract.address === like.contract &&
            item.token_id === like.token_id
          ) {
            item.liked = true;
          }
        });

        newOwnedLikedItems.push(item);
      });
      setOwnedLikedItems(newOwnedLikedItems);
    }
  }, [ownedItems, mylikes]);

  useEffect(() => {
    var newLikedLikedItems = [];

    if (likedItems.length > 0 && mylikes) {
      _.forEach(likedItems, function (item) {
        item.liked = false;

        _.forEach(mylikes, function (like) {
          if (
            item.asset_contract.address === like.contract &&
            item.token_id === like.token_id
          ) {
            item.liked = true;
          }
        });

        newLikedLikedItems.push(item);
      });
      setLikedLikedItems(newLikedLikedItems);
    }
  }, [likedItems, mylikes]);

  const handleLike = async ({
    contract,
    token_id,
    creator_address,
    creator_name,
    creator_img_url,
  }) => {
    like({ contract, token_id });

    var newOwnedItems = [...ownedItems];
    _.forEach(newOwnedItems, function (item) {
      if (
        item.asset_contract.address === contract &&
        item.token_id === token_id
      ) {
        item.showtime.like_count = item.showtime.like_count + 1;
      }
    });
    setOwnedItems(newOwnedItems);

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

    var newOwnedItems = [...ownedItems];
    _.forEach(newOwnedItems, function (item) {
      if (
        item.asset_contract.address === contract &&
        item.token_id === token_id
      ) {
        item.showtime.like_count = item.showtime.like_count - 1;
      }
    });
    setOwnedItems(newOwnedItems);

    await backend.post(
      `/v1/token/${contract}/${token_id}`,
      JSON.stringify({ action: "unlike" }),
      {
        headers: { Authorization: "Bearer " + did },
      }
    );

    likeCountsChanged();
  };

  /*
  useEffect(() => {
    if (isLoggedIn) {
      console.log("Get my info");
    } else {
      attemptSigninFromCookie();
    }
  }, [isLoggedIn]);*/

  return (
    <Layout>
      <SEO
        keywords={[`showtime`, `ethereum`, `token`, `nft`]}
        title="Profile"
      />
      <div className="bg-black text-white font-bol">
        <div className="container mx-auto flex px-5 pt-20 pb-10 flex-col items-center">
          <img
            alt="artist"
            className="flex-shrink-0 rounded-full  w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={my_img_url}
          />
          <div className="text-3xl mt-4">{my_name ? my_name : my_address}</div>
          <h1 className="text-5xl font-medium title-font mt-8 mb-4 text-white tracking-widest font-bol uppercase text-center">
            Owned Items
          </h1>
          {ownedLikedItems.map((item) => {
            return (
              <section
                key={item.id}
                className="bg-black text-white mx-auto sm:w-full"
              >
                <div className="container px-5 py-8 mx-auto ">
                  <div className="flex flex-wrap -mx-8 -mb-10 ">
                    <div className="sm:w-full mb-6">
                      <div className="h-96 overflow-hidden mb-6 ">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full"
                          src={item.image_url}
                          style={{ maxHeight: 500 }}
                        />
                      </div>
                      <div className="float-right">
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
                      <div className="text-3xl mb-3 ">
                        {item.name}{" "}
                        {item.creator &&
                        item.creator.user &&
                        item.creator.user.username
                          ? " by "
                          : null}
                        {item.creator &&
                        item.creator.user &&
                        item.creator.user.username
                          ? item.creator.user.username
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <h1 className="text-2xl font-medium title-font mt-8 mb-4 text-white tracking-widest font-bol uppercase text-center">
            Liked Items
          </h1>
          {likedLikedItems.map((item) => {
            return (
              <div key={item.token_id}>
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={item.image_url}
                  style={{ maxHeight: 500 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
