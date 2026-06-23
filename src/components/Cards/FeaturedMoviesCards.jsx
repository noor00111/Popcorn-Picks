import { Link } from "react-router-dom";
import { FaStar, FaClock } from "react-icons/fa";

const FeaturedMoviesCards = ({ feature }) => {
  const { _id, poster, title, genre, duration, year, rating } = feature;

  return (
    <div className="group featured-card bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
      <div className="relative [aspect-ratio:2/3] overflow-hidden shrink-0">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover block transition-transform duration-[0.6s] [cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"/>

        <div className="absolute top-[0.6rem] right-[0.6rem] bg-black/[0.72] backdrop-blur-[8px] rounded-[0.4rem] py-[0.2rem] px-[0.5rem] flex items-center gap-[0.25rem]">
          <FaStar className="text-[#f5c518] text-[0.65rem]" />
          <span className="text-[#f5c518] font-bold text-[0.75rem]">{rating}</span>
        </div>

        <div className="absolute top-[0.6rem] left-[0.6rem] bg-black/[0.72] backdrop-blur-[8px] rounded-[0.4rem] py-[0.2rem] px-[0.5rem] text-[#e5e7eb] text-[0.7rem] font-medium">
          {year}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-[linear-gradient(to_top,rgba(0,0,0,0.80)_0%,transparent_100%)]" />
      </div>

      <div className="p-[0.875rem] flex flex-col gap-[0.45rem] flex-1">
        <h3 className="font-titleFont text-[1.1rem] text-[#1a1a1a] dark:text-[#f3f4f6] leading-[1.2] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h3>

        <div className="flex flex-wrap gap-[0.25rem]">
          {genre.slice(0, 2).map((g, i) => (
            <span
              key={i}
              className="text-[0.6rem] py-[0.15rem] px-[0.5rem] rounded-full bg-[rgba(245,197,24,0.12)] dark:bg-[rgba(245,197,24,0.10)] text-[#d97706] border border-[rgba(245,197,24,0.35)] dark:border-[rgba(245,197,24,0.22)] font-semibold tracking-[0.03em]">
              {g}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-[0.35rem] text-gray-500 dark:text-[#9ca3af] text-[0.74rem]">
          <FaClock className="text-[0.62rem] text-[#f5c518]" />
          {duration} min
        </div>

        <Link to={`/movieDetails/${_id}`}
          className="text-[#d97706] font-semibold text-[0.8rem] no-underline transition-all duration-200 hover:text-[#09090f] hover:-translate-y-0.5">
          See more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedMoviesCards;
