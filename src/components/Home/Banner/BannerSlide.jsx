import { FaPlay, FaCalendarAlt, FaClock, FaInfoCircle } from "react-icons/fa";
import { useTheme } from "../../../ThemeController/DarkLightMode.jsx";
import StarRating from "../Banner/StarRating.jsx";

export default function BannerSlide({ movie, isActive }) {
  const { isDark } = useTheme();
  const overlayL = isDark ? "9,9,15" : "254,252,232";
  const overlayR = isDark ? "9,9,15" : "250,240,200";

  const slideIn = (delay = 0) => ({
    opacity: isActive ? 1 : 0,
    transform: isActive ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  const posterAnim = {
    opacity: isActive ? 1 : 0,
    transform: isActive
      ? "scale(1) translateX(0)"
      : "scale(0.93) translateX(28px)",
    transition: "opacity 0.85s ease 0.25s, transform 0.85s ease 0.25s",
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.12]"
        style={{
          backgroundImage: `url(${movie.poster})`,
          filter: `blur(26px) brightness(${isDark ? "0.22" : "0.60"}) saturate(1.3)`,
        }}/>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right,
            rgba(${overlayL},0.97) 0%,
            rgba(${overlayL},0.88) 38%,
            rgba(${overlayR},0.55) 62%,
            rgba(${overlayR},0.05) 100%)`,
        }}/>

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(${overlayL},0.90) 0%, transparent 38%)`,
        }}/>
      <div className="relative z-[1] h-full flex items-center max-w-[1100px] mx-auto px-8 gap-12">
        <div className="flex-1 flex flex-col justify-center">
          <div
            className="flex gap-2 mb-[0.9rem] flex-wrap"
            style={slideIn(0.05)}>
            {movie.genre.map((g) => (
              <span
                key={g}
                className="py-[0.22rem] px-[0.7rem] text-[0.62rem] font-bold rounded-full bg-[rgba(245,197,24,0.15)] text-[#d97706] border border-[rgba(245,197,24,0.40)] tracking-[0.08em] uppercase">
                {g}
              </span>
            ))}
          </div>

          <h2
            className="font-titleFont leading-[1.0] mb-[0.45rem] tracking-[-0.01em] text-[#1a1a1a] dark:text-white text-[clamp(2.8rem,5.5vw,4.5rem)]"
            style={slideIn(0.15)}>
            {movie.title}
          </h2>

          <div
            className="w-14 h-[3px] bg-gradient-to-r from-[#f5c518] to-[#e50914] rounded-[2px] mb-[0.9rem]"
            style={slideIn(0.2)}/>

          <div
            className="flex items-center gap-[0.875rem] mb-[0.875rem] flex-wrap"
            style={slideIn(0.27)}>
            <StarRating rating={movie.rating} />
            <span className="text-black/20 dark:text-white/20">|</span>
            <span className="flex items-center gap-[0.35rem] text-[0.82rem] text-black/55 dark:text-white/60">
              <FaCalendarAlt className="text-[#f5c518] text-[0.72rem]" />
              {movie.year}
            </span>
            <span className="text-black/20 dark:text-white/20">|</span>
            <span className="flex items-center gap-[0.35rem] text-[0.82rem] text-black/55 dark:text-white/60">
              <FaClock className="text-[#f5c518] text-[0.72rem]" />
              {movie.duration}
            </span>
          </div>

          <p
            className="text-sm leading-[1.8] max-w-[480px] mb-[1.6rem] text-black/65 dark:text-white/80 overflow-hidden [-webkit-line-clamp:3] [-webkit-box-orient:vertical] [display:-webkit-box]"
            style={slideIn(0.35)}>
            {movie.description}
          </p>

          <div className="flex gap-[0.875rem] flex-wrap" style={slideIn(0.43)}>
            <button
              aria-label={`Watch ${movie.title}`}
              className="inline-flex items-center gap-2 bg-[#f5c518] hover:bg-[#ffd700] text-[#09090f] font-bold text-sm py-[0.72rem] px-7 rounded-full border-0 cursor-pointer shadow-[0_4px_18px_rgba(245,197,24,0.45)]
                         hover:shadow-[0_8px_28px_rgba(245,197,24,0.65)] hover:-translate-y-0.5 transition-[transform,background,box-shadow] duration-200">
              <FaPlay className="text-[0.6rem]" />
              Watch Now
            </button>

            <button
              aria-label={`More info about ${movie.title}`}
              className="inline-flex items-center gap-2
                         bg-black/[0.08] dark:bg-white/10
                         border border-black/[0.22] dark:border-white/[0.28]
                         hover:bg-black/[0.14] dark:hover:bg-white/20
                         hover:border-black/[0.38] dark:hover:border-white/[0.45]
                         text-[#1a1a1a] dark:text-white font-semibold text-sm
                         py-[0.72rem] px-7 rounded-full cursor-pointer
                         [backdrop-filter:blur(10px)] [-webkit-backdrop-filter:blur(10px)]
                         hover:-translate-y-0.5
                         transition-[transform,background,border-color] duration-200">
              <FaInfoCircle className="text-[0.72rem]" />
              More Info
            </button>
          </div>
        </div>

        <div className="hidden md:block shrink-0" style={posterAnim}>
          <div
            className="w-[240px] rounded-2xl overflow-hidden relative shadow-[0_24px_60px_rgba(0,0,0,0.30),0_0_0_1px_rgba(0,0,0,0.06)]
              dark:shadow-[0_32px_80px_rgba(0,0,0,0.80),0_0_0_1px_rgba(255,255,255,0.07)]">
            <img
              src={movie.poster}
              alt={movie.title}
              width={240}
              height={360}
              className="w-full h-[360px] object-cover block"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[70px]"
              style={{
                background: `linear-gradient(to bottom, transparent, rgba(${overlayL},0.80))`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
