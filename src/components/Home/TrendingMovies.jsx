import { useRef } from "react";
import { FaFire } from "react-icons/fa";
import { MOVIES } from "../../utls/promosAndTrendingData";

const TrendingMovies = () => {
  const scrollRef = useRef(null);

  const startScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const id = setInterval(() => { el.scrollLeft += 1; }, 18);
    el.dataset.scrollId = id;
  };

  const stopScroll = () => {
    const el = scrollRef.current;
    if (el?.dataset.scrollId) {
      clearInterval(Number(el.dataset.scrollId));
      delete el.dataset.scrollId;
    }
  };

  return (
    <section className="bg-[#fff9e6] dark:bg-[#0d0d1a] border-t border-b border-black/[0.07] dark:border-white/[0.06] py-[4.5rem] px-6 transition-[background] duration-300">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
          <div>
            <div className="flex items-center gap-[0.45rem] mb-[0.4rem]">
              <FaFire className="text-[#e50914] text-[0.82rem]" />
              <span className="text-[#e50914] text-[0.65rem] tracking-[0.22em] uppercase font-bold">
                Hot Right Now
              </span>
            </div>
            <h2 className="font-titleFont text-[clamp(1.8rem,4vw,2.75rem)] text-[#1a1a1a] dark:text-white leading-[1.1] mb-[0.3rem] [text-wrap:balance]">
              Trending Movies
            </h2>
            <p className="text-black/45 dark:text-white/[0.48] text-[0.85rem]">
              What everyone's watching right now
            </p>
          </div>
        </div>

        <div className="h-[2px] bg-[linear-gradient(to_right,#e50914,rgba(229,9,20,0.12),transparent)] rounded-[2px] mb-8 mt-5" />
        <div
          ref={scrollRef}
          onMouseEnter={stopScroll}
          onMouseLeave={startScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3 scrollbar-hide"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
          {MOVIES.map((m, i) => (
            <div
              key={i}
              className="group trending-card shrink-0 w-[210px] bg-white dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.35)] relative">
              <div className="h-[165px] overflow-hidden relative">
                <img
                  src={m.img}
                  alt={m.title}
                  width={210}
                  height={165}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                <div className="absolute top-[0.55rem] right-[0.55rem] bg-[rgba(229,9,20,0.88)] backdrop-blur-[8px] rounded-full py-[0.18rem] px-[0.5rem] flex items-center gap-[0.22rem] text-[0.58rem] font-bold text-white tracking-[0.05em]">
                  <FaFire className="text-[0.52rem]" />
                  HOT
                </div>

                <div className="absolute bottom-2 left-[0.6rem] font-titleFont text-[2rem] text-white/[0.22] leading-none font-bold select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-titleFont text-base text-[#1a1a1a] dark:text-[#f3f4f6] mb-[0.3rem] overflow-hidden whitespace-nowrap text-ellipsis">
                  {m.title}
                </h3>

                <div className="h-[1.5px] w-8 bg-[linear-gradient(to_right,#e50914,rgba(229,9,20,0.2))] rounded-[2px] mb-[0.4rem]" />
                <p className="text-gray-500 dark:text-[#9ca3af] text-[0.72rem] leading-[1.55] overflow-hidden [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box]">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
