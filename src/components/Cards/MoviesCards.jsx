import { Link } from "react-router-dom";
import { FaStar, FaClock, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const MoviesCards = ({ movie }) => {
  const { _id, poster, title, genre, duration, year, rating } = movie;

  return (
    <div className="group movie-card bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
      <div className="relative overflow-hidden h-[380px] shrink-0">
        <img
          src={poster}
          alt={title}
          width={260}
          height={380}
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[0.6s] ease-in-out group-hover:scale-105 bg-black/[0.06] dark:bg-white/[0.05]"/>

        <div className="absolute top-[0.7rem] right-[0.7rem] bg-black/75 backdrop-blur-[10px] rounded-lg py-[0.28rem] px-[0.6rem] flex items-center gap-[0.28rem] border border-[rgba(245,197,24,0.25)]">
          <FaStar className="text-[#f5c518] text-[0.68rem]" />
          <span className="text-[#f5c518] font-bold text-[0.8rem]">{rating}</span>
        </div>

        <div className="absolute top-[0.7rem] left-[0.7rem] bg-black/75 backdrop-blur-[10px] rounded-lg py-[0.28rem] px-[0.6rem] flex items-center gap-[0.28rem] border border-white/10">
          <FaCalendarAlt className="text-[0.6rem] text-[#9ca3af]" />
          <span className="text-[#d1d5db] text-[0.72rem] font-medium">{year}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,transparent_100%)]" />
      </div>

      <div className="p-4 flex flex-col gap-[0.55rem] flex-1">
        <h2 className="font-titleFont text-[1.3rem] text-[#1a1a1a] dark:text-[#f3f4f6] leading-[1.2] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h2>

        <div className="flex flex-wrap gap-[0.28rem]">
          {genre.slice(0, 3).map((g, i) => (
            <span
              key={i}
              className="text-[0.62rem] px-[0.52rem] py-[0.18rem] rounded-full bg-[rgba(245,197,24,0.12)] dark:bg-[rgba(245,197,24,0.09)] text-[#d97706] border border-[rgba(245,197,24,0.32)] dark:border-[rgba(245,197,24,0.20)] font-semibold tracking-[0.02em]">
              {g}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-[0.4rem] text-gray-500 dark:text-[#9ca3af] text-[0.78rem]">
          <FaClock className="text-[0.65rem] text-[#f5c518]" />
          {duration} min
        </div>

        <div className="h-px bg-[linear-gradient(to_right,rgba(245,197,24,0.30),transparent)] dark:bg-[linear-gradient(to_right,rgba(245,197,24,0.18),transparent)]" />
        <Link
          to={`/movieDetails/${_id}`}
          className="flex items-center justify-center gap-[0.4rem] py-[0.6rem] rounded-[0.625rem] no-underline mt-auto font-bold text-[0.86rem] text-[#09090f] [background:linear-gradient(135deg,#f5c518,#e5a800)] shadow-[0_3px_12px_rgba(245,197,24,0.30)] transition-[transform,box-shadow,background] duration-200 hover:[background:linear-gradient(135deg,#ffd700,#f5c518)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,197,24,0.50)]">
          View Details <FaArrowRight className="text-[0.68rem]" />
        </Link>
      </div>
    </div>
  );
};

export default MoviesCards;
