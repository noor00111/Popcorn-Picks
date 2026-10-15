import { useState } from "react";
import { FaEnvelope, FaCheckCircle, FaFilm, FaBell } from "react-icons/fa";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const perks = [
    { icon: <FaFilm />,    text: "New release alerts" },
    { icon: <FaBell />,    text: "Weekly recommendations" },
    { icon: <FaEnvelope />, text: "Exclusive deals" },
  ];

  return (
    <section className="py-20 px-6 bg-[#fffbeb] dark:bg-[#0d0d1a] border-t border-b border-black/[0.07] dark:border-white/[0.06] relative overflow-hidden transition-[background] duration-300">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[50px] bg-[radial-gradient(circle,rgba(245,197,24,0.18)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(245,197,24,0.06)_0%,transparent_70%)]"
      />

      <div className="relative z-[1] max-w-[640px] mx-auto">
        <div className="bg-white/70 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.07] rounded-[1.5rem] py-12 px-10 shadow-[0_16px_48px_rgba(0,0,0,0.10)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] text-center">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[linear-gradient(135deg,#f5c518,#e5a800)] shadow-[0_6px_20px_rgba(245,197,24,0.40)] mb-5 text-[1.25rem] text-[#09090f]">
            <FaEnvelope />
          </div>

          <div className="mb-[0.875rem]">
            <span className="inline-block py-1 px-[0.875rem] rounded-full bg-[rgba(245,197,24,0.15)] dark:bg-[rgba(245,197,24,0.10)] border border-[rgba(245,197,24,0.40)] dark:border-[rgba(245,197,24,0.25)] text-[#d97706] text-[0.65rem] font-bold tracking-[0.1em] uppercase">
              Stay in the Loop
            </span>
          </div>

          <h2 className="font-titleFont text-[clamp(1.9rem,4vw,2.75rem)] text-[#1a1a1a] dark:text-white leading-[1.1] mb-3 [text-wrap:balance]">
            Subscribe to Our Newsletter
          </h2>

          <p className="text-black/55 dark:text-white/55 text-[0.9rem] leading-[1.75] max-w-[420px] mx-auto mb-7">
            Stay updated with the latest movie news, reviews, and
            recommendations. Join our community now!
          </p>

          <div className="flex justify-center gap-5 flex-wrap mb-8">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-[0.4rem] text-[0.78rem] font-medium text-black/55 dark:text-white/55">
                <span className="text-[#f5c518] text-[0.72rem]">{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>

          <div className="h-px bg-black/[0.07] dark:bg-white/[0.06] mb-7" />
          {submitted ? (
            <div className="inline-flex items-center gap-[0.625rem] py-[0.875rem] px-7 bg-green-500/10 border border-green-500/25 rounded-full text-green-700 dark:text-[#4ade80] font-semibold text-[0.9rem]">
              <FaCheckCircle />
              You&rsquo;re subscribed! Welcome to the club 🎬
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-[0.625rem] flex-wrap justify-center">
              <div className="flex-[1_1_260px] relative flex items-center">
                <FaEnvelope
                  className={`absolute left-4 text-[0.8rem] pointer-events-none transition-colors duration-200 ${
                    focused ? 'text-[#f5c518]' : 'text-gray-400 dark:text-gray-500'
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className={`w-full py-[0.78rem] pr-5 pl-10 rounded-full text-[0.875rem] transition-[border-color,box-shadow] duration-200 outline-none bg-white dark:bg-white/[0.06] text-[#1a1a1a] dark:text-[#f3f4f6] border-[1.5px] ${
                    focused
                      ? 'border-[rgba(245,197,24,0.70)] shadow-[0_0_0_3px_rgba(245,197,24,0.15)]'
                      : 'border-black/[0.14] dark:border-white/10'
                  }`}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
              </div>
              <button
                type="submit"
                className="py-[0.78rem] px-7 rounded-full whitespace-nowrap text-[0.875rem] btn-gold">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
