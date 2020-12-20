import React from "react";
import hero from "./images/hero.png"

function Hero() {
  return (
    <section className="font-bol animated-gradient">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bol text-black">Showtime intro</h1>
          <p className="mb-8 leading-relaxed text-4xl font-book">Discover and showcase your favorite digital art.</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <button className="inline-flex text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded font-book text-lg">Get Started</button>
          </div>
        </div>
        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={hero} />
        </div>
      </div>
    </section>
  );
}

export default Hero; 
