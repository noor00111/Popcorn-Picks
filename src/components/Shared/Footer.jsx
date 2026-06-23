import {FaTwitter, FaInstagram, FaGithub, FaLinkedin,FaFilm, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeController/DarkLightMode.jsx";

const Footer = () => {
  const { isDark } = useTheme();

  const footerBg     = isDark ? "#0a0a14"                  : "#1c1917";
  const headingColor = "#e5e7eb";
  const textColor    = isDark ? "#6b7280"                  : "#9ca3af";
  const dividerColor = isDark ? "rgba(255,255,255,0.07)"   : "rgba(255,255,255,0.08)";
  const socialBg     = isDark ? "rgba(255,255,255,0.05)"   : "rgba(255,255,255,0.06)";
  const socialBorder = isDark ? "rgba(255,255,255,0.08)"   : "rgba(255,255,255,0.10)";

  const links = [
    { to: "/",            label: "Home"       },
    { to: "/allMovies",   label: "All Movies" },
    { to: "/addMovie",    label: "Add Movie"  },
    { to: "/myFavorites", label: "Favourites" },
    { to: "/about",       label: "About"      },
    { to: "/contact",     label: "Contact"    },
  ];

  const socials = [
    { href: "https://github.com/noor00111", icon: <FaGithub />, label: "GitHub"    },
    { href: "#", icon: <FaTwitter />,   label: "Twitter"   },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://www.linkedin.com/in/ayeshanoorbristy/", icon: <FaLinkedin />,  label: "LinkedIn"  },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="font-['Raleway',sans-serif] transition-colors duration-300 ease-in-out"
      style={{
        background: footerBg,
        borderTop: `1px solid ${dividerColor}`}}>
      <div className="h-0.5 bg-[linear-gradient(to_right,transparent,#f5c518,#e50914,transparent)]"/>

      <div className="max-w-[1200px] mx-auto pt-14 px-6">
        <div className="grid-cols-1 md:grid-cols-[2fr_1fr_1fr]"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: `1px solid ${dividerColor}`,
          }}>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-[0.6rem] bg-[linear-gradient(135deg,_#f5c518,_#e5a800)] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(245,197,24,0.35)]">
                <FaFilm className="text-[#09090f] text-base" />
              </div>
              <span className="font-['Rancho',cursive] text-2xl leading-none">
                <span className="#f1f5f9">POPCORN</span>
                <span className="#f5c518"> PICKS</span>
              </span>
            </div>

            <p className="text-sm leading-[1.8] max-w-[290px] mb-6" style={{ color: textColor }}>
              Your ultimate destination for discovering and celebrating the magic of movies.
              Let&rsquo;s make every movie night special.
            </p>

            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    background: socialBg,
                    border: `1px solid ${socialBorder}`,
                    color: textColor}}
                  className="w-[2.1rem] h-[2.1rem] rounded-lg flex items-center justify-center text-[0.85rem] no-underline transition-all duration-200 ease-in-out">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[2px] h-4 bg-[#f5c518] rounded-[2px]"/>
              <h3 className="font-bold text-[0.78rem] tracking-[0.12em] uppercase m-0"
                  style={{ color: headingColor }}>
                Navigation
              </h3>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col gap-[0.6rem]">
              {links.map((l) => (
                <li key={l.to} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[rgba(245,197,24,0.4)] shrink-0"/>
                  <Link to={l.to} style={{ color: textColor }}
                  className="text-[0.875rem] no-underline transition-all duration-200 hover:text-[#f5c518] hover:pl-1">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[2px] h-4 bg-[#f5c518] rounded-[2px]"/>
              <h3 style={{color: headingColor}}
              className="font-bold text-[0.78rem] tracking-[0.12em] uppercase m-0">
                Contact
              </h3>
            </div>
        
            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[0.4rem] bg-[rgba(245,197,24,0.10)] border border-[rgba(245,197,24,0.20)] flex items-center justify-center shrink-0 mt-[0.1rem]">
                  <FaEnvelope className="text-[#f5c518] text-[0.72rem]" />
                </div>
                <a href="mailto:support@popcornPicks.com" style={{ color: textColor }} 
                className="no-underline text-[0.84rem] leading-[1.5]">
                  support@popcornPicks.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[0.4rem] bg-[rgba(245,197,24,0.10)] border border-[rgba(245,197,24,0.20)] flex items-center justify-center shrink-0">
                  <FaPhone className="text-[#f5c518] text-[0.68rem]" />
                </div>
                <a href="tel:+1787621395" style={{ color: textColor}}
                 className="text-[0.84rem] no-underline">
                  +1 889 209 000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0 mt-[0.1rem]">
                  <FaMapMarkerAlt className="text-[#f5c518] text-[0.72rem]"/>
                </div>
                <span style={{ color: textColor, fontSize: "0.84rem", lineHeight: 1.5 }}>
                  Chandgoan, Chittagong
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center py-5 flex-wrap gap-3">
          <p className="text-[0.78rem]" style={{ color: textColor }}>
            &copy; {new Date().getFullYear()} Popcorn Picks. All Rights Reserved.
          </p>

          <button onClick={scrollToTop} aria-label="Scroll to top"
            className="w-[2.1rem] h-[2.1rem] rounded-lg flex items-center justify-center cursor-pointer text-[#f5c518] bg-[rgba(245,197,24,0.10)] border border-[rgba(245,197,24,0.22)] transition-all duration-200 hover:bg-[#f5c518] hover:text-[#09090f] hover:-translate-y-[2px]">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
