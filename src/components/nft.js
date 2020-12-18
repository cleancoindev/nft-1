import React from "react";
import { graphql } from 'gatsby';
import Query from '../graph/query';
import uni from "./images/uni.png"
import nft from "./images/nft.png"
import n from "./images/nft-1.png"

function Creators() {
    return (
        <section class="font-book">
            <div class="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
                    <h1 className="lg:w-1/2 w-full leading-relaxed text-base font-bol text-3xl text-purple-100">Featured Digital Art</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full shadow-lg rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={uni} alt="nft" />
                            <div class="p-6">
                                <h1 class="title-font text-xl font-medium text-black font-bol uppercase mb-3 text-white">The Uni Tape</h1>
                                <p class="leading-relaxed mb-3 text-white">NFT description</p>
                                <div class="flex items-center flex-wrap ">
                                    <span class="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                        ❤️ 1.2K
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full shadow-lg rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={n} alt="nft" />
                            <div class="p-6">
                                <h1 class="title-font text-xl font-medium text-black font-bol uppercase mb-3 text-white">Alpha Omega</h1>
                                <p class="leading-relaxed mb-3 text-white">NFT description</p>
                                <div class="flex items-center flex-wrap ">
                                    <span class="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                        ❤️ 1.2K
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full shadow-lg rounded-lg overflow-hidden">
                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={nft} alt="nft" />
                            <div class="p-6">
                                <h1 class="title-font text-xl font-medium text-black font-bol uppercase mb-3 text-white">Dancing sunrise</h1>
                                <p class="leading-relaxed mb-3 text-white">NFT description</p>
                                <div class="flex items-center flex-wrap ">
                                    <span class="text-gray-100 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                                        ❤️ 1.2K
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Creators; 