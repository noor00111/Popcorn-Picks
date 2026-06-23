import React from "react";
import { features } from "../utls/aboutData";


const About = () => {
  return (
    <div className="bg-backgroundColor min-h-screen px-5 py-14 transition-[background] duration-300">
      <div className="max-w-[900px] mx-auto">

        <div className="text-center mb-12">
          <span className="text-[#f5c518] text-[0.68rem] tracking-[0.26em] uppercase font-bold">
            Who we are
          </span>
          <h1 className="font-titleFont text-[clamp(2.5rem,6vw,4rem)] text-[#1a1a1a] dark:text-white leading-[1.05] [text-wrap:balance] mt-[0.3rem] mb-4">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-[1.8] max-w-[620px] mx-auto">
            Welcome to{" "}
            <span className="text-[#d97706] dark:text-[#f5c518] font-bold font-titleFont text-[1.1em]">PopcornPicks</span>
            , your ultimate destination for all things cinema. We're passionate about movies and dedicated to celebrating storytelling, creativity, and the magic of the silver screen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white dark:bg-[#0d0d1a] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl px-6 py-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.40)] feature-card">
              <div className="w-10 h-10 rounded-[0.625rem] mb-4 bg-[rgba(167,139,250,0.10)] dark:bg-[rgba(167,139,250,0.12)] border border-[rgba(167,139,250,0.22)] flex items-center justify-center">
                <Icon className="text-[#a78bfa] text-[1.1rem]" />
              </div>

              <div className="h-[2px] w-8 bg-[#f5c518] rounded-[1px] mb-[0.875rem]" />
              <h3 className="font-paraFont text-base font-extrabold text-[#d97706] dark:text-[#f5c518] mb-[0.6rem]">
                {title}
              </h3>
              <p className="text-gray-500 dark:text-[#9ca3af] text-sm leading-[1.75]">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(245,197,24,0.08)] border border-[rgba(245,197,24,0.15)] dark:border-[rgba(245,197,24,0.15)] rounded-2xl p-8">
          <div className="flex gap-3 items-start">
            <div className="text-[2.5rem] leading-none text-[#f5c518] shrink-0 font-[Georgia,serif] -mt-1">&ldquo;</div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-[1.8]">
              Whether you're looking for inspiration, entertainment, or a walk down memory lane,{" "}
              <span className="text-[#d97706] dark:text-[#f5c518] font-bold">PopcornPicks</span>{" "}
              is here to spark your imagination and keep the movie magic alive. Sit back, grab some popcorn, and let the show begin.
            </p>
          </div>
          <div className="mt-5 pt-5 border-t border-black/[0.07] dark:border-white/[0.06] flex items-center gap-2">
            <div className="w-6 h-[2px] bg-[#f5c518] rounded-[1px]" />
            <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-400 dark:text-gray-500">
              The PopcornPicks Team
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
