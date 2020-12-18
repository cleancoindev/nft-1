import React from "react";
import hero from "./images/hero.png"

function Hero() {
  return (
    <section class="font-bol">
      <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 text-purple-100">Discover and showcase your favorite digital art</h1>
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={hero} />
          <div class="flex w-full justify-center items-end mb-8">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <input type="text" id="hero-field" name="hero-field" placeholder="Search digital items" class="w-full bg-gray-100 rounded border border-gray-300 font-book focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button class="inline-flex text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded-md text-lg">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 
