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


  const linkStyle = ({ isActive }) => ({
    padding: "0.375rem 0.875rem",
    borderRadius: "9999px",
    fontSize: "0.85rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "background 0.2s ease, color 0.2s ease",
    background: isActive ? "#f5c518" : "transparent",
    color: isActive ? "#09090f" : "var(--nav-link-color)",
    whiteSpace: "nowrap",
  });

  const mobileLinkStyle = ({ isActive }) => ({
    display: "flex",
    padding: "0.75rem 0",
    color: isActive ? "#f5c518" : "var(--nav-link-color)",
    fontWeight: isActive ? 600 : 400,
    textDecoration: "none",
    fontSize: "0.95rem",
    borderBottom: "1px solid var(--divider)",
    transition: "color 0.2s",
  });

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-3xl transition-all duration-300 border-b`}
      style={{
        background: scrolled ? isDark ? "rgba(9,9,15,0.97)" : "rgba(254,252,232,0.97)"
          : isDark ? "rgba(9,9,15,0.80)": "rgba(254,252,232,0.85)",
        borderColor: "var(--nav-border)",
        boxShadow: scrolled ? `0 4px 40px var(--shadow)` : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center gap-4">
        <Link to="/"className="flex items-center gap-2 flex-shrink-0 no-underline">
          <FaFilm className="text-[#f5c518] text-[1.35rem]" />
          <span className="font-['Rancho'] text-2xl tracking-[0.02em] leading-none">
            <span className="text-[var(--body_color)]">POPCORN</span>
            <span className="text-[#f5c518]"> PICKS</span>
          </span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-0.5 rounded-full p-1 border"
            style={{
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              borderColor: "var(--nav-border)",
            }}>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} style={linkStyle}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <button onClick={toggleTheme}
          className=" flex items-center justify-center w-9 h-9 rounded-full cursor-pointer flex-shrink-0 text-[0.9rem] transition-colors duration-200"
          style={{
              border: `1px solid var(--nav-border)`,
              background: isDark ? "rgba(245,197,24,0.12)" : "rgba(0,0,0,0.06)",
              color: "#f5c518"}}>
            {isDark ? <FaSun /> : <FaMoon className="text-[#1d4ed8]" />}
          </button>

          {user?.email ? (
            <div className="dropdown dropdown-end">
              <button type="button" 
                className="w-[38px] h-[38px] rounded-full overflow-hidden cursor-pointer flex-shrink-0 flex items-center justify-center p-0"
                style={{ border: "2px solid rgba(245,197,24,0.45)", background: "var(--card-bg)",}}>
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
               className=" dropdown-content z-[1] mt-2 shadow-2xl border rounded-[0.875rem] p-4 backdrop-blur-[20px] min-w-[190px] list-none dark:bg-[rgba(12,12,20,0.97)] bg-[rgba(254,252,232,0.98)]"
               style={{borderColor: "var(--card-border)"}}>
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

          {/* ------------mobile view--------- */}
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
              style={mobileLinkStyle}
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
