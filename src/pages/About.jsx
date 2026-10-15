import { Link } from "react-router-dom";
import { FaArrowRight, FaLock } from "react-icons/fa";
import { features } from "../utls/aboutData";
import "../styles/cinema.css";

const About = () => {
  return (
    <div className="bg-backgroundColor min-h-screen px-4 sm:px-6 py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto">

        <header className="marquee">
          <div className="relative rounded-2xl px-6 py-14 md:py-20 text-center bg-[radial-gradient(ellipse_at_top,#2a2116_0%,#0f0d0c_70%)]">
            <p className="text-[0.7rem] font-bold tracking-[0.4em] uppercase text-[#f5c518]/80">
              Now showing
            </p>
            <h1 className="font-titleFont leading-none mt-3 text-[clamp(3.5rem,12vw,7.5rem)] text-[#fde68a] [text-shadow:0_0_28px_rgba(245,197,24,0.45)] [text-wrap:balance]">
              PopcornPicks
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/70 max-w-[460px] mx-auto leading-relaxed [text-wrap:pretty]">
              A home for the movies you love: find them, add them, keep them.
            </p>
          </div>
        </header>

        <section className="grid md:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-12 mt-14 md:mt-20 items-start">
          <h2 className="font-titleFont text-[clamp(2rem,5vw,2.75rem)] leading-[1.05] text-bodyColor [text-wrap:balance]">
            Made by a movie fan, for movie fans.
          </h2>
          <div className="space-y-4 text-[0.98rem] leading-[1.8] text-colorMuted [text-wrap:pretty]">
            <p>
              PopcornPicks started with a simple idea: one place to keep track of films worth watching.
            </p>
            <p>
              Anyone can browse the catalogue. Sign in and you can add movies you think others should see,
              rate them, and build a favourites list of your own.
            </p>
          </div>
        </section>

        <section className="mt-16 md:mt-24" aria-labelledby="about-features">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
            <h2 id="about-features" className="font-titleFont text-[clamp(1.8rem,4vw,2.4rem)] text-bodyColor leading-none">
              What you can do here
            </h2>
            <p className="flex items-center gap-1.5 text-xs text-colorMuted">
              <FaLock className="text-[0.65rem]" aria-hidden="true" />
              Members only: log in first
            </p>
          </div>

          <ul className="border-t-2 border-bodyColor">
            {features.map(({ icon: Icon, title, body, to, cta, needsLogin }) => (
              <li
                key={title}
                className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-3 py-6 px-2 sm:px-4 border-b border-[var(--divider)] transition-colors duration-200 hover:bg-[rgba(245,197,24,0.07)]">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#1c1917] text-[#f5c518] text-lg shadow-[0_6px_16px_rgba(0,0,0,0.18)] dark:border dark:border-[rgba(245,197,24,0.25)]">
                  <Icon aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <h3 className="flex items-center gap-2 flex-wrap font-titleFont text-[1.6rem] leading-tight text-bodyColor">
                    {title}
                    {needsLogin && (
                      <span className="inline-flex items-center gap-1 font-paraFont text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full border border-[var(--divider)] text-colorMuted">
                        <FaLock className="text-[0.5rem]" aria-hidden="true" />
                        Members
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-colorMuted max-w-[52ch]">{body}</p>
                </div>

                <Link
                  to={to}
                  className="col-start-2 sm:col-start-auto justify-self-start sm:justify-self-end inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border border-[var(--divider)] text-bodyColor transition-[background-color,border-color,color] duration-200 hover:bg-[#f5c518] hover:border-[#f5c518] hover:text-[#09090f]">
                  {cta}
                  <FaArrowRight className="text-[0.7rem] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
