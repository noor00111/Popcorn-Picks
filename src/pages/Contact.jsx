import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  const contactItems = [
    { icon: FaEnvelope,    label: 'Email',    value: 'hello@popcornpicks.io' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Dhaka, Bangladesh' },
    { icon: FaClock,       label: 'Hours',    value: 'Mon – Fri, 9 AM – 6 PM' },
  ];

  const inputClass = (name) =>
    `w-full py-[0.7rem] px-[0.9rem] rounded-[0.6rem] border-[1.5px] text-[0.9rem] outline-none font-paraFont transition-[border-color,box-shadow] duration-200 bg-[#fafaf8] dark:bg-white/5 text-[#1a1a1a] dark:text-[#e5e7eb] ${
      focusedField === name
        ? 'border-[#f5c518] shadow-[0_0_0_3px_rgba(245,197,24,0.18)]'
        : 'border-black/[0.13] dark:border-white/10'
    }`;

  return (
    <div className="bg-backgroundColor min-h-screen px-5 py-14 transition-[background] duration-300">
      <div className="max-w-[1000px] mx-auto">

        <div className="text-center mb-12">
          <span className="text-[#f5c518] text-[0.68rem] tracking-[0.26em] uppercase font-bold">
            We'd love to hear from you
          </span>
          <h1 className="font-titleFont text-[clamp(2.2rem,5vw,3.5rem)] text-[#1a1a1a] dark:text-white leading-[1.1] [text-wrap:balance] mt-[0.35rem]">
            Get in Touch
          </h1>
          <p className="text-gray-400 dark:text-gray-500 text-[0.95rem] mt-[0.6rem] max-w-[480px] mx-auto">
            Questions, feedback, or just want to say hi? Drop us a message — we reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 items-start">

          <div className="bg-[rgba(245,197,24,0.06)] border border-[rgba(245,197,24,0.18)] dark:border-[rgba(245,197,24,0.15)] rounded-2xl p-8">
            <h2 className="font-titleFont text-2xl text-[#f5c518] mb-1">
              Popcorn Picks
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-[0.85rem] mb-7 leading-[1.6]">
              Your cinematic universe, always open.
            </p>

            <div className="flex flex-col gap-[1.1rem]">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-[0.875rem]">
                  <div className="w-[2.1rem] h-[2.1rem] rounded-lg shrink-0 bg-[rgba(245,197,24,0.12)] border border-[rgba(245,197,24,0.20)] flex items-center justify-center">
                    <Icon className="text-[#f5c518] text-[0.8rem]" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-gray-500 dark:text-gray-400 mb-[0.1rem]">
                      {label}
                    </div>
                    <div className="text-[#1a1a1a] dark:text-[#e5e7eb] text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-black/[0.07] dark:border-white/[0.06]">
              <p className="text-gray-400 dark:text-gray-500 text-[0.8rem] leading-[1.7]">
                Found a bug or want a feature? Open an issue on our GitHub — we review all reports.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0d0d1a] border border-black/[0.08] dark:border-white/[0.07] rounded-2xl p-8 shadow-[0_16px_48px_rgba(0,0,0,0.07)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.50)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-[2.5rem] mb-3">🎬</div>
                <h3 className="font-titleFont text-2xl text-[#f5c518] mb-[0.4rem]">
                  Message sent!
                </h3>
                <p className="text-gray-400 dark:text-gray-500 text-[0.9rem]">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-5 py-[0.55rem] rounded-full border border-[rgba(245,197,24,0.30)] bg-transparent text-[#f5c518] text-[0.8rem] cursor-pointer transition-[background] duration-200 hover:bg-[rgba(245,197,24,0.10)]"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[1.1rem]">

                <div>
                  <label htmlFor="contact-name" className="block text-[0.78rem] font-bold mb-[0.4rem] text-[#374151] dark:text-[#d1d5db]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Ada Lovelace"
                    required
                    className={inputClass('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[0.78rem] font-bold mb-[0.4rem] text-[#374151] dark:text-[#d1d5db]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass('email')}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[0.78rem] font-bold mb-[0.4rem] text-[#374151] dark:text-[#d1d5db]">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what's on your mind…"
                    required
                    className={`${inputClass('message')} h-auto resize-y`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-[0.8rem] rounded-xl text-[0.95rem] btn-gold-sm">
                  <IoIosSend className="text-base" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
