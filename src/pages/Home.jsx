import React from "react";
import HomeImg from "../assets/home.png";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import MovieSkeleton from "../components/MovieSkeleton";

function Home() {
  return (
    <main>
      {/* header */}
      <section id="header" className="container mx-auto max-w-7xl p-6">
        {/* description */}
        <div className="flex items-center lg:w-3/5 justify-evenly">
          <div className="flex flex-col">
            <div className="bg-accent h-2 w-32 hidden md:block"></div>
            <div className="font-bold text-5xl md:text-6xl leading-tight max-w-xl mt-8 mb-8">
              <span className="text-accent">Movies</span> from everywhere on
              earth.
            </div>

            <form className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 md:p-6 md:bg-darkest rounded mb-8">
              <input
                type="text"
                className="py-3 px-5 focus:outline-none rounded text-black flex-1"
                placeholder="Search movies..."
                // value={searchText}
                // onChange={(e) => setSearchText(e.target.value)}
              />

              <button className="bg-accent flex items-center justify-center rounded text-white px-8 py-3 md:w-28 h-12">
                <i></i>
              </button>
            </form>
          </div>
        </div>

        {/* image */}
        <figure className="w-2/5 hidden lg:block">
          <img src={HomeImg} alt="" />
        </figure>
      </section>

      {/* popular movies */}
      <section id="popular" className="bg-darker">
        <div className="relative container max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <div className="h-1 w-24 bg-accent mb-3 hidden md:block"></div>
              <h2 className="text-3xl md:text-4xl font-bold">Popular Movies</h2>
            </div>

            <Link
              to="/popular"
              className="hidden md:block border-2 border-[#68ded7] text-white uppercase px-10 py-2 tracking-widest font-semibold hover:bg-[#68ded7] hover:text-black duration-150 ease"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            <Movie />
            <MovieSkeleton />
          </div>

          <Link
            to="/popular"
            className="border-2 border-[#68ded7] text-white uppercase w-full px-10 py-2 tracking-widest font-semibold hover:bg-[#68ded7] hover:text-black duration-150 ease block text-center mt-12 md:hidden"
          >
            View all
          </Link>
        </div>
      </section>

      {/* top rated movies */}
      <section id="toprated" className="bg-dark">
        <div className="relative container max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <div className="h-1 w-24 bg-accent mb-3 hidden md:block"></div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Top Rated Movies
              </h2>
            </div>

            <Link
              to="/toprated"
              className="hidden md:block border-2 border-[#68ded7] text-white uppercase px-10 py-2 tracking-widest font-semibold hover:bg-[#68ded7] hover:text-black duration-150 ease"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16"></div>

          <Link
            to="/toprated"
            className="border-2 border-[#68ded7] text-white uppercase w-full px-10 py-2 tracking-widest font-semibold hover:bg-[#68ded7] hover:text-black duration-150 ease block text-center mt-12 md:hidden"
          >
            View all
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
