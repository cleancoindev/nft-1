import React from "react";
import u1 from "./images/user1.png";
import u2 from "./images/user2.png";
import u3 from "./images/user3.png";
import u4 from "./images/user4.png";
import u5 from "./images/user5.png";
import { FaHeart } from 'react-icons/fa';

function Leaderboard() {
    return (
        <section className="font-book bg-black text-white" id="leaderboard">
            <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest font-bol uppercase">Top Creators</h1>
                    <div class="flex w-full justify-center items-end">
                        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="text" placeholder="Search for an NFT..." id="nft" name="hero-field" class="w-full rounded focus:ring-2 focus:ring-pink-200 bg-transparent focus:bg-transparent border-2 border-gray-200 focus:border-pink-600 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button class="inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol">Search</button>
                    </div>
                </div>
                <div class="flex flex-wrap -m-4 items-center justify-center">
                    <div class="p-4 lg:w-full flex text-center justify-center">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <button class="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                            <img alt="artist" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={u1} />
                            <div class="flex-grow sm:pl-8">
                                <h3 class="text-white mb-3 font-bol text-3xl">Beeple</h3>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-full flex text-center justify-center">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <button class="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                            <img alt="artist" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={u2} />
                            <div class="flex-grow sm:pl-8">
                                <h3 class="text-white mb-3 font-bol text-3xl">Josie Bellini</h3>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-full flex text-center justify-center">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <button class="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                            <img alt="artist" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={u3} />
                            <div class="flex-grow sm:pl-8">
                                <h3 class="text-white mb-3 font-bol text-3xl">Fewocious</h3>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-full flex text-center justify-center">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <button class="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                            <img alt="artist" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={u4} />
                            <div class="flex-grow sm:pl-8">
                                <h3 class="text-white mb-3 font-bol text-3xl">CoinArtist</h3>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-full flex text-center justify-center">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <button class="inline-flex mb-2 lg:mr-10 text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
                            <img alt="artist" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={u5} />
                            <div class="flex-grow sm:pl-8">
                                <h3 class="text-white mb-3 font-bol text-3xl">3LAU</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Leaderboard; 