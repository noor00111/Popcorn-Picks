import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../../../ThemeController/DarkLightMode.jsx";
import { bannerMovies } from "../../../utls/bannerData.js";
import BannerSlide from "./BannerSlide.jsx";

const Banner = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { isDark } = useTheme();

  return (
    <div className="relative overflow-hidden">
      <Swiper modules={[Autoplay, EffectFade]} 
        effect="fade" fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        speed={900}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[min(600px,88vh)]">

        {bannerMovies.map((movie, i) => (
          <SwiperSlide key={i}>{({ isActive }) =>
           <BannerSlide movie={movie} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <button aria-label="Previous slide" onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/[0.08] dark:bg-white/[0.08]
                    border border-black/[0.15] dark:border-white/[0.18] text-[#1a1a1a] dark:text-white hover:bg-black/[0.16] dark:hover:bg-white/[0.16] transition-[background,border-color] duration-200 cursor-pointer">
        <FaChevronLeft className="text-[0.8rem]" />
      </button>

      <button aria-label="Next slide" onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-20 w-11 h-11 rounded-full flex items-center justify-center bg-black/[0.08] dark:bg-white/[0.08] border border-black/[0.15] dark:border-white/[0.18]
                   text-[#1a1a1a] dark:text-white hover:bg-black/[0.16] dark:hover:bg-white/[0.16] transition-[background,border-color] duration-200 cursor-pointer">
        <FaChevronRight className="text-[0.8rem]" />
      </button>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {bannerMovies.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => swiperRef.current?.slideToLoop(i)}
            className="h-[6px] rounded-full border-0 cursor-pointer p-0
                       transition-[width,background] duration-[0.35s] ease-in-out"
            style={{
              width: activeIndex === i ? "2rem" : "6px",
              background: activeIndex === i ? "#f5c518" : isDark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.20)",
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 z-20 flex items-baseline gap-[2px] text-[0.72rem] tracking-[0.08em] font-medium text-black/38 dark:text-white/38">
        <span className="text-[#f5c518] font-bold text-[0.95rem]">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        &nbsp;/&nbsp;
        {String(bannerMovies.length).padStart(2, "0")}
      </div>

    </div>
  );
};

export default Banner;
