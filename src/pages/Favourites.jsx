import React from "react";
import { Link } from "react-router-dom";

function Favourites() {
  return (
    <div className="flex-1">
      <div className="container mx-auto max-w-7xl px-6 pt-12 flex flex-col md:flex-row gap-y-4 md:items-center justify-between">
        {/* title */}
        <div className="flex flex-col">
          <div className="h-1 w-24 bg-accent mb-3 hidden md:block"></div>
          <h1 className="text-3xl md:text-4xl font-bold">Favourites</h1>
        </div>
      </div>

      {/* genres */}
      <div className="container mx-auto max-w-7xl p-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {/* movies grid / skeleton */}
        </div>
        {/* if no movies */}
        <div className="flex flex-col">
          <div className="text-lg md:text-xl mb-6">
            There are no movies in your favourites.
          </div>
          <Link
            to="/"
            className="self-start border-2 border-[#68ded7] text-white uppercase px-10 py-2 tracking-widest font-semibold hover:bg-[#68ded7] hover:text-black text-sm md:text-base duration-150 ease"
          >
            browse movies
          </Link>
        </div>
        {/* pagination */}
      </div>
    </div>
  );
}

export default Favourites;
