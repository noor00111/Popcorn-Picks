import { Link } from "react-router-dom";
import FeaturedMoviesCards from "../Cards/FeaturedMoviesCards.jsx";
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner.jsx";
import TrendingMovies from "./TrendingMovies.jsx";
import PartnerPromotions from "./PartnerPromotions.jsx";
import Newsletter from "./Newsletter.jsx";
import { FaArrowRight, FaFilm } from "react-icons/fa";

const FeaturedMovies = () => {
  const [featuredData, setFeatureData] = useState([]);

  useEffect(() => {
    fetch("https://popcorn-picks-server.vercel.app/movies/featured?limit=8")
      .then((res) => res.json())
      .then((data) => setFeatureData(data))
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#fefce8] dark:bg-[#0a0a0f] transition-[background] duration-300">
      <Banner />

      <section className="py-[4.5rem] px-6 bg-[#fefce8] dark:bg-[#0a0a0f] transition-[background] duration-300">
        <div className="max-w-[1200px] mx-auto">

          <div className="flex items-end justify-between mb-2 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-[0.45rem] mb-[0.4rem]">
                <FaFilm className="text-[#f5c518] text-[0.8rem]" />
                <span className="text-[#d97706] text-[0.65rem] tracking-[0.22em] uppercase font-bold">
                  Hand Picked
                </span>
              </div>

              <h2 className="font-titleFont text-[clamp(1.8rem,4vw,2.75rem)] text-[#1a1a1a] dark:text-white leading-[1.1] mb-[0.3rem] [text-wrap:balance]">
                Featured Movies
              </h2>
              <p className="text-black/45 dark:text-white/50 text-[0.85rem]">
                Our editors' top picks just for you
              </p>
            </div>
            <Link
              to="/allMovies"
              className="inline-flex items-center gap-[0.4rem] py-[0.55rem] px-5 rounded-full bg-[rgba(245,197,24,0.12)] dark:bg-[rgba(245,197,24,0.08)] border border-[rgba(245,197,24,0.35)] dark:border-[rgba(245,197,24,0.22)] text-[#d97706] font-semibold text-[0.82rem] no-underline whitespace-nowrap transition-[background,border-color,color,transform] duration-200 hover:bg-[#f5c518] hover:border-[#f5c518] hover:text-[#ff9b29] hover:-translate-y-0.5">
              View All <FaArrowRight className="text-[0.62rem]" />
            </Link>
          </div>

          <div className="h-[2px] bg-[linear-gradient(to_right,#f5c518,rgba(245,197,24,0.12),transparent)] rounded-[2px] mb-9 mt-5" />
          {featuredData.length === 0 ? (
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-black/[0.04] dark:bg-white/[0.04] rounded-2xl overflow-hidden border border-black/[0.07] dark:border-white/[0.06]">
                  <div
                    className="[aspect-ratio:2/3] [animation:skeletonPulse_1.5s_ease-in-out_infinite] bg-[length:200%_100%] bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_25%,rgba(0,0,0,0.08)_50%,rgba(0,0,0,0.04)_75%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_25%,rgba(255,255,255,0.07)_50%,rgba(255,255,255,0.03)_75%)]"
                  />
                  <div className="p-[0.875rem]">
                    <div className="h-4 w-3/4 rounded bg-black/[0.06] dark:bg-white/[0.06] mb-2" />
                    <div className="h-3 w-1/2 rounded bg-black/[0.06] dark:bg-white/[0.06]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-5">
              {featuredData.map((feature) => (
                <FeaturedMoviesCards key={feature._id} feature={feature} />
              ))}
            </div>
          )}
        </div>
      </section>

      <TrendingMovies />
      <PartnerPromotions />
      <Newsletter />
    </div>
  );
};

export default FeaturedMovies;
