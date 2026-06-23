import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MoviesCards from "../components/Cards/MoviesCards";
import { FaSearch, FaFilm, FaTimes } from "react-icons/fa";

const AllMovies = () => {
  const movieList = useLoaderData();
  const [moviesData, setMovieData] = useState(movieList);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const searchMovie = (val) => {
    setQuery(val);
    setMovieData(
      movieList.filter((m) =>
        m.title.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  const clearSearch = () => { searchMovie(""); };

  return (
    <div className="bg-[#fefce8] dark:bg-[#09090f] min-h-screen transition-[background] duration-300">
      <div className="bg-[linear-gradient(to_bottom,rgba(245,197,24,0.14)_0%,transparent_100%)] dark:bg-[linear-gradient(to_bottom,rgba(245,197,24,0.06)_0%,transparent_100%)] border-b border-black/[0.07] dark:border-white/[0.06] pt-14 pb-11 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-[0.45rem] mb-[0.4rem]">
              <FaFilm className="text-[#f5c518] text-[0.82rem]" />
              <span className="text-[#d97706] text-[0.65rem] tracking-[0.22em] uppercase font-bold">
                Full Catalogue
              </span>
            </div>
            <h1 className="font-titleFont text-[clamp(2rem,4vw,3rem)] text-[#1a1a1a] dark:text-white leading-[1.05] mb-[0.3rem] [text-wrap:balance]">
              All Movies
            </h1>
          </div>

          <div className="relative w-full max-w-[420px]">
            <FaSearch
              className={`absolute left-[1.1rem] top-1/2 -translate-y-1/2 text-[0.85rem] pointer-events-none transition-colors duration-200 ${
                focused ? 'text-[#f5c518]' : 'text-gray-400 dark:text-gray-500'
              }`}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => searchMovie(e.target.value)}
              placeholder="Search by title…"
              className={`w-full py-[0.875rem] pr-11 pl-11 rounded-full text-[0.88rem] transition-[border-color,box-shadow,background] duration-200 box-border bg-white dark:bg-white/[0.06] text-[#1a1a1a] dark:text-[#f3f4f6] outline-none border-[1.5px] ${
                focused
                  ? 'border-[rgba(245,197,24,0.60)] shadow-[0_0_0_3px_rgba(245,197,24,0.14)]'
                  : 'border-black/[0.13] dark:border-white/10'
              }`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
            {query && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-[1.4rem] h-[1.4rem] rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 cursor-pointer text-[0.65rem] transition-[background] duration-200 bg-black/[0.08] dark:bg-white/10 hover:bg-black/[0.14] dark:hover:bg-white/[0.18] border-0">
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {moviesData.length === 0 ? (
          <div className="text-center py-20 px-6 bg-black/[0.02] dark:bg-white/[0.02] rounded-[1.25rem] border border-black/[0.07] dark:border-white/[0.06]">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.06] mb-5">
              <FaSearch className="text-gray-300 dark:text-[#374151] text-[1.4rem]" />
            </div>
            <p className="text-gray-400 dark:text-[#6b7280] text-base font-semibold mb-[0.4rem]">
              No movies found for &ldquo;
              <span className="text-[#f5c518]">{query}</span>
              &rdquo;
            </p>
            <p className="text-gray-500 dark:text-[#4b5563] text-sm">
              Try a different title or{" "}
              <button
                onClick={clearSearch}
                className="bg-transparent border-0 text-[#d97706] cursor-pointer font-semibold text-sm p-0 underline">
                clear your search
              </button>
            </p>
          </div>
        ) : (
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-6">
            {moviesData.map((movie) => (
              <MoviesCards key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
