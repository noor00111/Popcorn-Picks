import { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../styles/cinema.css";

const contactItems = [
  { icon: FaEnvelope,     label: 'Email',    value: 'support@popcornPicks.com', href: 'mailto:support@popcornPicks.com' },
  { icon: FaPhone,        label: 'Phone',    value: '+1 889 209 000',           href: 'tel:+1889209000' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Chandgoan, Chittagong' },
  { icon: FaClock,        label: 'Hours',    value: 'Mon - Fri, 9 AM - 6 PM' },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl text-[0.92rem] font-paraFont text-bodyColor bg-[var(--auth-input-bg)] border-[1.5px] border-[var(--auth-input-border)] placeholder:text-[var(--auth-placeholder)] outline-none transition-[border-color,box-shadow] duration-200 hover:border-[var(--auth-input-border-hover)] focus:border-[#f5c518] focus:shadow-[0_0_0_4px_rgba(245,197,24,0.22)]";

const labelClass = "block text-[0.78rem] font-semibold mb-1.5 text-bodyColor";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div className="bg-backgroundColor min-h-screen px-4 sm:px-6 py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-[960px] mx-auto">

        <header className="text-center mb-10 md:mb-12">
          <p className="text-[0.7rem] font-bold tracking-[0.4em] uppercase text-[#b45309] dark:text-[#f5c518]">
            Contact
          </p>
          <h1 className="font-titleFont text-[clamp(2.6rem,7vw,4rem)] leading-none mt-2 text-bodyColor [text-wrap:balance]">
            Send us a note
          </h1>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-colorMuted max-w-[500px] mx-auto [text-wrap:pretty]">
            A question about a listing, a bug you spotted, or an idea for the site? We read every message.
          </p>
        </header>

        <div className="grid md:grid-cols-[1fr_300px] rounded-[1.5rem] overflow-hidden bg-[var(--auth-card-bg)] border border-[var(--auth-card-border)] shadow-[var(--auth-card-shadow)]">
          <div className="p-6 sm:p-10" aria-live="polite">

            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="ticket-stamp px-6 py-2 rounded-lg border-[3px] border-double border-[#b91c1c] dark:border-[#f87171] text-[#b91c1c] dark:text-[#f87171] font-titleFont text-4xl tracking-wider">
                  Received
                </div>
                <h2 className="mt-8 text-xl font-bold text-bodyColor">Message sent</h2>
                <p className="mt-2 text-sm text-colorMuted max-w-[34ch]">
                  We'll reply to the email address you gave us.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2 rounded-full text-sm font-semibold border border-[var(--auth-input-border)] text-bodyColor transition-colors duration-200 hover:border-[#f5c518] hover:bg-[rgba(245,197,24,0.10)]">
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>Name</label>
                    <input id="contact-name" name="name" type="text" autoComplete="name"
                      placeholder="Jane Doe" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email</label>
                    <input id="contact-email" name="email" type="email" autoComplete="email"
                      spellCheck={false} placeholder="you@example.com" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                  <input id="contact-subject" name="subject" type="text" autoComplete="off"
                    placeholder="A wrong poster, a feature idea" required className={inputClass} />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>Message</label>
                  <textarea id="contact-message" name="message" rows={6}
                    placeholder="Tell us what's on your mind" required
                    className={`${inputClass} resize-y`} />
                </div>

                <button type="submit"
                  className="self-start inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[0.95rem] btn-gold">
                  <IoIosSend className="text-lg" aria-hidden="true" />
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="ticket-stub bg-[#1c1917] text-white px-7 py-9 flex flex-col">
            <p className="text-[0.65rem] font-bold tracking-[0.4em] uppercase text-[#f5c518]">
              Admit one
            </p>
            <p className="font-titleFont text-3xl mt-1 text-white">PopcornPicks</p>

            <ul className="mt-8 space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-1 shrink-0 text-[0.85rem] text-[#f5c518]" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-white/50">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-white/90 break-words hover:text-[#f5c518] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/90">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div aria-hidden="true"
              className="mt-auto pt-10">
              <div className="h-10 opacity-60 bg-[repeating-linear-gradient(90deg,#fff_0_2px,transparent_2px_4px,#fff_4px_5px,transparent_5px_9px,#fff_9px_12px,transparent_12px_14px)]" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
