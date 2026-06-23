import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyFavMovieCards from "../components/Cards/MyFavMovieCards";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaHeart, FaFilm } from "react-icons/fa";

const MyFavorites = () => {
  const userData = useContext(AuthContext);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(`https://popcorn-picks-server.vercel.app/favMovies?email=${userData.user.email}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

  const handleFavMovieDelete = (id) => {
    Swal.fire({
      title: "Remove from Favourites?",
      text: "This movie will be removed from your list.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://popcorn-picks-server.vercel.app/favMovies/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Movie removed from your favourites.",
                icon: "success",
                confirmButtonColor: "#f5c518",
              });
              setMovieData((prev) => prev.filter((m) => m._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="bg-backgroundColor min-h-screen transition-[background] duration-300">

      <div className="bg-[linear-gradient(to_bottom,rgba(239,68,68,0.07)_0%,transparent_100%)] dark:bg-[linear-gradient(to_bottom,rgba(239,68,68,0.06)_0%,transparent_100%)] border-b border-black/[0.07] dark:border-white/[0.05] pt-12 pb-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <FaHeart className="text-[#dc2626] dark:text-[#f87171] text-[0.85rem]" />
            <span className="text-[#dc2626] dark:text-[#f87171] text-[0.7rem] tracking-[0.28em] uppercase font-bold">
              Your Collection
            </span>
          </div>
          <h1 className="font-titleFont text-[clamp(2rem,5vw,3.5rem)] text-[#1a1a1a] dark:text-white leading-[1.1] [text-wrap:balance]">
            My Favourites
          </h1>
          {movieData.length > 0 && (
            <p className="text-gray-400 dark:text-[#6b7280] text-sm mt-2">
              {movieData.length} movie{movieData.length !== 1 ? "s" : ""} saved
            </p>
          )}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {movieData.length === 0 ? (
          <div className="text-center py-20 px-6 bg-black/[0.025] dark:bg-white/[0.02] rounded-2xl border border-black/[0.08] dark:border-white/[0.06]">
            <FaFilm className="text-gray-200 dark:text-[#374151] text-[3.5rem] mx-auto mb-5" />
            <h3 className="font-titleFont text-2xl text-gray-400 dark:text-[#4b5563] mb-2">
              No favourites yet
            </h3>
            <p className="text-gray-400 dark:text-[#374151] text-[0.9rem] mb-6">
              Browse movies and hit &ldquo;Add to Favourites&rdquo; to build your list.
            </p>
            <Link
              to="/allMovies"
              className="inline-flex items-center gap-[0.4rem] px-7 py-[0.65rem] rounded-full bg-[#f5c518] text-[#09090f] font-bold text-sm no-underline shadow-[0_4px_14px_rgba(245,197,24,0.30)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,197,24,0.45)]"
            >
              Browse Movies
            </Link>
          </div>
        ) : (
          <div className="grid [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] gap-6">
            {movieData.map((favMovie) => (
              <MyFavMovieCards
                key={favMovie._id}
                detailsData={favMovie}
                handleFavMovieDelete={handleFavMovieDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
