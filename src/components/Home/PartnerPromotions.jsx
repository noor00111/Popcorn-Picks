import { FaTag } from "react-icons/fa";
import { PROMOS } from "../../utls/promosAndTrendingData";

const PartnerPromotions = () => {
  return (
    <section className="py-[4.5rem] px-6 bg-[#fefce8] dark:bg-[#09090f] border-t border-b border-black/[0.07] dark:border-white/[0.06] transition-[background] duration-300">
      <div className="max-w-[1200px] mx-auto">

        <div className="mb-2">
          <div className="flex items-center gap-[0.45rem] mb-[0.4rem]">
            <FaTag className="text-[#f5c518] text-[0.8rem]" />
            <span className="text-[#d97706] text-[0.65rem] tracking-[0.22em] uppercase font-bold">
              Exclusive Deals
            </span>
          </div>
          <h2 className="font-titleFont text-[clamp(1.8rem,4vw,2.75rem)] text-[#1a1a1a] dark:text-white leading-[1.1] mb-[0.3rem]">
            Partner Promotions
          </h2>
        </div>

        <div className="h-[2px] bg-[linear-gradient(to_right,#f5c518,rgba(245,197,24,0.12),transparent)] rounded-[2px] mb-9 mt-5" />

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-6">
          {PROMOS.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] rounded-[1.25rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[6px]"
              style={{
                '--accent-border': p.accent.border,
                '--accent-glow': p.accent.glow,
              }}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-[3.25rem] h-[3.25rem] rounded-xl object-cover block"
                      style={{ border: `1.5px solid ${p.accent.border}` }}
                    />
                    <div
                      className="absolute -bottom-[0.4rem] -right-[0.4rem] w-[1.35rem] h-[1.35rem] rounded-full flex items-center justify-center text-white text-[0.55rem]"
                      style={{
                        background: p.accent.text,
                        boxShadow: `0 2px 8px ${p.accent.glow}`,
                        border: '2px solid var(--card-bg)',
                      }}>
                      {p.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[#1a1a1a] dark:text-[#f1f5f9] font-bold text-[0.95rem] leading-[1.3] mb-[0.35rem] font-paraFont">
                      {p.title}
                    </h3>
                    <span
                      className="inline-block py-[0.18rem] px-[0.6rem] rounded-full text-[0.62rem] font-bold tracking-[0.06em] uppercase border"
                      style={{ background: p.accent.bg, borderColor: p.accent.border, color: p.accent.text }}
                    >
                      {p.label}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-[#9ca3af] text-[0.84rem] leading-[1.7] mb-5">
                  {p.desc}
                </p>

                <div className="h-px bg-black/[0.07] dark:bg-white/[0.06] mb-4" />
                <div className="flex items-center justify-between gap-3">
                  <div
                    className="inline-flex items-center gap-[0.4rem] py-[0.35rem] px-[0.875rem] rounded-lg font-bold text-[0.8rem] tracking-[0.1em] font-mono border-[1.5px] border-dashed bg-black/[0.04] dark:bg-black/35"
                    style={{ borderColor: p.accent.border, color: p.accent.text }}>
                    <FaTag className="text-[0.6rem]" />
                    {p.code}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerPromotions;
