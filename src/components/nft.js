import React from "react";
import { graphql } from 'gatsby';
import Query from '../graph/query';
import uni from "./images/uni.png";
import nft from "./images/nft.png";
import n from "./images/nft-1.png";
import g from "./images/nft-2.png";
import { FaInstagram, FaRegHeart, FaTwitter } from 'react-icons/fa';

function Creators() {
    return (
        <section class="font-book">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex w-full mb-20 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-book lg:w-1/3 lg:mb-0 font-bol">Featured</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2 hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={uni} />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-black font-bol">UNI TAPE</h2>
                                <h3 class="text-gray-500 mb-3">Owned by Alex Masmej</h3>
                                <p class="mb-4">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                                <span class="inline-flex">
                                    <a class="text-black hover:text-pink-600">
                                        <FaInstagram />
                                    </a>
                                    <a class="ml-2 text-black hover:text-blue-600">
                                        <FaTwitter />
                                    </a>
                                    <a class="ml-2 hover:text-red-600">
                                        <FaRegHeart />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={nft} />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-black font-bol">Dancing Sunrise</h2>
                                <h3 class="text-gray-500 mb-3">Owned by Alex Masmej</h3>
                                <p class="mb-4">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                                <span class="inline-flex">
                                    <a class="text-black hover:text-pink-600">
                                        <FaInstagram />
                                    </a>
                                    <a class="ml-2 text-black hover:text-blue-600">
                                        <FaTwitter />
                                    </a>
                                    <a class="ml-2 hover:text-red-600">
                                        <FaRegHeart />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={n} />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-black font-bol">UNI TAPE</h2>
                                <h3 class="text-gray-500 mb-3">Owned by Alex Masmej</h3>
                                <p class="mb-4">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                                <span class="inline-flex">
                                    <a class="text-black hover:text-pink-600">
                                        <FaInstagram />
                                    </a>
                                    <a class="ml-2 text-black hover:text-blue-600">
                                        <FaTwitter />
                                    </a>
                                    <a class="ml-2 hover:text-red-600">
                                        <FaRegHeart />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/2 hover:shadow-xl" style={{ transition: "all .15s ease" }}>
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={g} />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-black font-bol">UNI TAPE</h2>
                                <h3 class="text-gray-500 mb-3">Owned by Alex Masmej</h3>
                                <p class="mb-4">THE UNI TAPE by DIGITAL COLLECTIBLES</p>
                                <span class="inline-flex">
                                    <a class="text-black hover:text-pink-600">
                                        <FaInstagram />
                                    </a>
                                    <a class="ml-2 text-black hover:text-blue-600">
                                        <FaTwitter />
                                    </a>
                                    <a class="ml-2 hover:text-red-600">
                                        <FaRegHeart />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Creators; 