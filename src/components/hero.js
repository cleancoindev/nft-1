import React from "react";
import { FaHeart } from 'react-icons/fa';
import bg from "./images/hero.png";
import share from "./images/share.svg";

function Hero() {
  return (
    <section class="bg-black font-bol text-white">
      <div class="container px-5 py-8 mx-auto">
        <div class="flex flex-wrap -mx-8 -mb-10 text-center">
          <div class="sm:w-full mb-6">
            <div class="h-96 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={bg} />
            </div>
            <h2 class="title-font text-3xl mt-6 mb-3">Name by Creator / Owner</h2>
            <button class="inline-flex text-black bg-white border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-lg font-bol"><span className="text-pink-600"><FaHeart className="h-6 w-6" /></span> <span className="text-pink-600 ml-2">233</span></button>
            <button class="inline-flex text-black bg-pink-600 border-0 py-2 px-2 ml-2 focus:outline-none hover:bg-pink-700 rounded text-lg"><img src={share} alt="share-button" className="h-6 w-6 items-center flex" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;  
