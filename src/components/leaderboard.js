import React from "react";
import { graphql } from 'gatsby';
import Query from '../graph/query';
import uni from "./images/uni.png";
import nft from "./images/nft.png";
import n from "./images/nft-1.png";
import g from "./images/nft-2.png";
import { FaInstagram, FaRegHeart, FaTwitter } from 'react-icons/fa';

function Leaderboard() {
    return (
        <section className="font-book" id="leaderboard">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-book lg:w-1/3 lg:mb-0 font-bol">Leaderboard</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border border-gray-700 p-6 rounded-lg hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={uni} alt="content" />
                            <h3 className="text-indigo-500 text-sm title-font">Alex Masmej</h3>
                            <h2 className="text-lg text-black font-bol mb-4">UNI TAPE</h2>
                            <p className="leading-relaxed text-base">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border border-gray-700 p-6 rounded-lg hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={nft} alt="content" />
                            <h3 className="text-indigo-500 text-sm title-font">Alex Masmej</h3>
                            <h2 className="text-lg text-black font-bol mb-4">UNI TAPE</h2>
                            <p className="leading-relaxed text-base">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border border-gray-700 p-6 rounded-lg hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={n} alt="content" />
                            <h3 className="text-indigo-500 text-sm title-font">Alex Masmej</h3>
                            <h2 className="text-lg text-black font-bol mb-4">UNI TAPE</h2>
                            <p className="leading-relaxed text-base">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                        </div>
                    </div>
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="border border-gray-700 p-6 rounded-lg hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={g} alt="content" />
                            <h3 className="text-indigo-500 text-sm title-font">Alex Masmej</h3>
                            <h2 className="text-lg text-black font-bol mb-4">UNI TAPE</h2>
                            <p className="leading-relaxed text-base">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Leaderboard; 