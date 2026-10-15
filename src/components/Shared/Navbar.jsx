import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider.jsx";
import { useTheme } from "../../ThemeController/DarkLightMode.jsx";
import {FaFilm, FaBars, FaTimes, FaSignOutAlt, FaUserCircle, FaSun, FaMoon} from "react-icons/fa";
import { useNavbarScroll } from "../../hooks/useNavScroll.js";
import { privateLinks, publicLinks } from "../../utls/navLinks.js";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { isDark, toggleTheme } = useTheme();
  const scrolled = useNavbarScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [...publicLinks, ...(user ? privateLinks : [])];


  const linkClass = ({ isActive }) =>
    `px-[0.875rem] py-1.5 rounded-full text-[0.85rem] font-medium no-underline whitespace-nowrap transition-colors duration-200 ${
      isActive ? "bg-[#f5c518] text-[#09090f]" : "text-[var(--nav-link-color)] hover:text-[var(--body_color)]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex py-3 text-[0.95rem] no-underline border-b border-[var(--divider)] transition-colors duration-200 ${
      isActive ? "text-[#f5c518] font-semibold" : "text-[var(--nav-link-color)] font-normal"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-3xl border-b border-[var(--nav-border)] transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-[rgba(254,252,232,0.97)] dark:bg-[rgba(9,9,15,0.97)] shadow-[0_4px_40px_var(--shadow)]"
          : "bg-[rgba(254,252,232,0.85)] dark:bg-[rgba(9,9,15,0.80)]"
      }`}>
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center gap-4">
        <Link to="/"className="flex items-center gap-2 flex-shrink-0 no-underline">
          <FaFilm className="text-[#f5c518] text-[1.35rem]" />
          <span className="font-['Rancho'] text-2xl tracking-[0.02em] leading-none">
            <span className="text-[var(--body_color)]">POPCORN PICKS</span>
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-0.5 rounded-full p-1 border border-[var(--nav-border)] bg-black/5 dark:bg-white/5">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer flex-shrink-0 text-[0.9rem] text-[#f5c518] border border-[var(--nav-border)] bg-black/[0.06] dark:bg-[rgba(245,197,24,0.12)] transition-colors duration-200">
            {isDark ? <FaSun /> : <FaMoon className="text-[#1d4ed8]" />}
          </button>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <button type="button" 
                aria-label="Account menu"
                className="w-[38px] h-[38px] rounded-full overflow-hidden cursor-pointer flex-shrink-0 flex items-center justify-center p-0 border-2 border-[rgba(245,197,24,0.45)] bg-[var(--card-bg)]">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="w-full h-full object-cover"/>
                ) : (
                  <FaUserCircle
                    className="text-[#f5c518] text-xl"
                  />
                )}
              </button>
              <ul tabIndex={0} 
               className="dropdown-content z-[1] mt-2 shadow-2xl border border-[var(--card-border)] rounded-[0.875rem] p-4 backdrop-blur-[20px] min-w-[190px] list-none dark:bg-[rgba(12,12,20,0.97)] bg-[rgba(254,252,232,0.98)]">
                <li className="pb-3 mb-3 border-b">
                  <span className="text-[var(--body_color_muted)] text-[0.72rem] block mb-[0.2rem]">
                    Signed in as
                  </span>
                  <span className="text-[var(--body_color)] text-sm font-semibold">
                    {user?.displayName || "User"}
                  </span>
                </li>
                <li>
                  <button onClick={logOutUser}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[0.85rem] font-semibold cursor-pointer transition-colors duration-200 hover:bg-red-500/20">
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden sm:flex gap-2">
              <Link to="/auth/login"
                className="px-[1.1rem] py-[0.45rem] rounded-full text-[0.85rem] font-semibold text-[var(--body_color)] border border-[var(--nav-border)] no-underline transition-all duration-200 ease-in-out whitespace-nowrap dark:bg-white/7 bg-black/6">
                Login
              </Link>
              <Link to="/auth/signup"
               className="px-4 py-2 rounded-full text-[0.85rem] font-bold text-[#09090f] bg-[#f5c518] no-underline transition-all duration-200 ease-in-out whitespace-nowrap">
                Sign Up
              </Link>
            </div>
          )}

          <button
            className={`lg:hidden border border-[var(--nav-border)] rounded-lg px-[0.55rem] py-[0.4rem] text-[var(--body_color)] cursor-pointer flex items-center ${isDark ? "bg-white/6" : "bg-black/6"}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={`lg:hidden ${isDark ? "bg-[rgba(9,9,15,0.98)]" : "bg-[rgba(254,252,232,0.98)]"} border-t border-[var(--nav-border)] px-6 pt-3 pb-5`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={mobileLinkClass}
              onClick={() => setMobileOpen(false)}>
              {item.label}
            </NavLink>
          ))}

          {!user?.email && (
            <div
              className="flex gap-3 pt-4">
              <Link to="/auth/login" onClick={() => setMobileOpen(false)}
               className={`flex-1 text-center p-[0.6rem] rounded-full border border-[var(--nav-border)] text-[var(--body_color)] no-underline font-semibold text-sm ${isDark ? "bg-white/7" : "bg-black/6"}`}>
                Login
              </Link>
              <Link to="/auth/signup" onClick={() => setMobileOpen(false)}
                className="flex-1 text-center p-[0.6rem] rounded-full bg-[#f5c518] text-[#09090f] no-underline font-bold text-sm">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
