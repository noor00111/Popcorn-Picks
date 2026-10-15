import { FaStar, FaClock, FaCalendarAlt, FaTrashAlt, FaHeart } from "react-icons/fa";

const MyFavMovieCards = ({ detailsData, handleFavMovieDelete }) => {
  const { _id, poster, title, genre, duration, year, rating } = detailsData;

  return (
    <div className="group fav-card bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.07] rounded-[0.875rem] overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.40)]">
      <div className="relative overflow-hidden h-[380px] shrink-0">
        <img
          src={poster}
          alt={title}
          width={260}
          height={380}
          loading="lazy"
          className="w-full h-full object-cover block transition-transform duration-[0.6s] ease-in-out group-hover:scale-105 bg-black/[0.06] dark:bg-white/[0.05]"/>

        <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-red-500/20 border border-red-500/[0.35] flex items-center justify-center">
          <FaHeart className="text-[#f87171] text-[0.75rem]" />
        </div>

        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-[10px] rounded-lg py-[0.3rem] px-[0.6rem] flex items-center gap-[0.3rem]">
          <FaStar className="text-[#f5c518] text-[0.7rem]" />
          <span className="text-[#f5c518] font-bold text-[0.8rem]">{rating}</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-[linear-gradient(to_top,rgba(0,0,0,0.72)_0%,transparent_100%)] dark:bg-[linear-gradient(to_top,rgba(9,9,15,0.90)_0%,transparent_100%)]" />
      </div>

      <div className="p-4 flex flex-col gap-[0.55rem] flex-1">
        <h2 className="font-titleFont text-[1.3rem] text-[#1a1a1a] dark:text-[#f3f4f6] leading-[1.2] overflow-hidden whitespace-nowrap text-ellipsis">
          {title}
        </h2>

        <div className="flex flex-wrap gap-[0.3rem]">
          {genre.slice(0, 3).map((g, i) => (
            <span key={i}
              className="text-[0.63rem] py-[0.18rem] px-[0.5rem] rounded-full bg-[rgba(248,113,113,0.09)] dark:bg-[rgba(248,113,113,0.10)] text-[#dc2626] dark:text-[#f87171] border border-[rgba(248,113,113,0.25)] dark:border-[rgba(248,113,113,0.20)] font-medium">
              {g}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <span className="flex items-center gap-[0.35rem] text-gray-400 dark:text-[#6b7280] text-[0.75rem]">
            <FaCalendarAlt className="text-[0.62rem]" />
            {year}
          </span>
          <span className="flex items-center gap-[0.35rem] text-gray-400 dark:text-[#6b7280] text-[0.75rem]">
            <FaClock className="text-[0.62rem]" />
            {duration} min
          </span>
        </div>

        <button onClick={() => handleFavMovieDelete(_id)}
          className="flex items-center justify-center gap-[0.4rem] py-[0.6rem] rounded-[0.625rem] text-sm mt-auto btn-danger">
          <FaTrashAlt className="text-[0.75rem]" />
          Remove from Favourites
        </button>
      </div>
    </div>
  );
};

export default MyFavMovieCards;
