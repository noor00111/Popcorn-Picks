import { FaStar, FaRegStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-[3px]">
      {[1, 2, 3, 4, 5].map((n) => n <= Math.round(rating) ? 
      (<FaStar key={n} className="text-[#f5c518] text-[0.8rem]" />) :
      (<FaRegStar key={n} className="text-[0.8rem] text-black/25 dark:text-white/35" />)
      )}
      <span className="text-[#f5c518] font-bold text-[0.9rem] ml-[6px]">
        {rating.toFixed(1)}
      </span>
      <span className="text-[0.8rem] text-black/45 dark:text-white/55">
        &thinsp;/ 5
      </span>
    </div>
  );
}
