import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdOutlineFavorite, MdUpdate } from "react-icons/md";
import { FaStar, FaCalendarAlt, FaClock, FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const detailsData = useLoaderData();
  const navigate    = useNavigate();
  const userData    = useContext(AuthContext);
  const { _id, poster, title, genre, duration, year, rating, summary } = detailsData;

  const handleMovieDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this movie?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://popcorn-picks-server.vercel.app/movies/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({ title: "Deleted!", text: "Your movie has been deleted.", icon: "success" });
              navigate("/allMovies");
            }
          });
      }
    });
  };

  const handleAddFavorite = () => {
    Swal.fire({
      title: "Add to Favourites?",
      text: "This movie will be saved to your favourites list.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#f5c518",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        delete detailsData._id;
        fetch("https://popcorn-picks-server.vercel.app/favMovies", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...detailsData, email: userData.user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Added!",
                text: "Successfully added to favourites.",
                icon: "success",
                confirmButtonText: "View Favourites",
                confirmButtonColor: "#f5c518",
              });
              navigate("/myFavorites");
            }
          });
      }
    });
  };

  const stars = Math.round(Number(rating));


  return (
    <div className="bg-[#fefce8] dark:bg-[#09090f] min-h-screen relative transition-[background] duration-300">
      <div
        className="fixed inset-0 bg-cover bg-center scale-110 z-0 blur-[40px] brightness-[0.55] saturate-[0.8] dark:brightness-[0.18] dark:saturate-[1.2]"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <div className="fixed inset-0 bg-[rgba(254,252,232,0.84)] dark:bg-[rgba(9,9,15,0.85)] z-[1]" />
      <div className="relative z-[2] max-w-[1100px] mx-auto px-6 py-8">

        <Link
          to="/allMovies"
          className="inline-flex items-center gap-[0.4rem] text-gray-500 dark:text-[#9ca3af] no-underline text-sm mb-8 transition-colors duration-200 hover:text-[#f5c518]">
          <FaArrowLeft className="text-xs" />
          Back to Movies
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] bg-white/[0.94] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-[1.25rem] overflow-hidden [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)]">
          <div className="relative min-h-[480px] overflow-hidden">
            <img
              src={poster}
              alt={title}
              width={360}
              height={480}
              className="w-full h-full object-cover block bg-black/[0.06] dark:bg-white/[0.05]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_60%,rgba(255,255,255,0.30)_100%)] dark:bg-[linear-gradient(to_right,transparent_60%,rgba(9,9,15,0.5)_100%)]" />
          </div>

          <div className="p-10 flex flex-col gap-5">
            <div className="flex flex-wrap gap-[0.375rem]">
              {genre.map((g, i) => (
                <span
                  key={i}
                  className="px-[0.7rem] py-1 rounded-full text-[0.68rem] font-semibold bg-[rgba(245,197,24,0.14)] dark:bg-[rgba(245,197,24,0.10)] text-[#d97706] dark:text-[#f5c518] border border-[rgba(245,197,24,0.35)] dark:border-[rgba(245,197,24,0.22)] uppercase tracking-[0.05em]"
                >
                  {g}
                </span>
              ))}
            </div>

            <h1 className="font-titleFont text-[clamp(2rem,5vw,3.25rem)] text-[#1a1a1a] dark:text-white leading-[1.05] [text-wrap:balance] m-0">
              {title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex gap-[2px]">
                {[1,2,3,4,5].map(n => (
                  <FaStar key={n} className={`text-base ${n <= stars ? 'text-[#f5c518]' : 'text-gray-200 dark:text-[#374151]'}`} />
                ))}
              </div>
              <span className="text-[#f5c518] font-bold text-[1.1rem]">{rating}</span>
              <span className="text-gray-400 dark:text-[#6b7280] text-[0.85rem]">/ 5</span>
            </div>

            <div className="flex gap-5 flex-wrap border-t border-black/[0.09] dark:border-white/[0.07] pt-[0.875rem]">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[#f5c518] text-[0.8rem]" />
                <span className="text-gray-500 dark:text-[#9ca3af] text-sm">
                  <strong className="text-[#1a1a1a] dark:text-[#e5e7eb]">{year}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#f5c518] text-[0.8rem]" />
                <span className="text-gray-500 dark:text-[#9ca3af] text-sm">
                  <strong className="text-[#1a1a1a] dark:text-[#e5e7eb]">{duration}</strong> min
                </span>
              </div>
            </div>

            {summary && (
              <div>
                <h3 className="text-gray-400 dark:text-[#6b7280] text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-2">
                  Synopsis
                </h3>
                <p className="text-[#374151] dark:text-[#9ca3af] text-[0.9rem] leading-[1.8]">{summary}</p>
              </div>
            )}

            <div className="flex flex-col gap-[0.625rem] mt-auto pt-2">
              <button
                onClick={handleAddFavorite}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f5c518] text-[#09090f] font-bold text-[0.95rem] border-0 cursor-pointer shadow-[0_4px_18px_rgba(245,197,24,0.35)] transition-[transform,background,box-shadow] duration-200 hover:bg-[#ffd700] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(245,197,24,0.50)]">
                <MdOutlineFavorite className="text-[1.1rem]" />
                Add to Favourites
              </button>

              <div className="grid grid-cols-2 gap-[0.625rem]">
                <Link
                  to={`/updatedMovie/${_id}`}
                  className="flex items-center justify-center gap-[0.4rem] py-[0.65rem] rounded-xl bg-blue-400/10 dark:bg-blue-400/10 border border-blue-400/[0.32] dark:border-blue-400/[0.22] text-[#60a5fa] font-semibold text-sm no-underline transition-[background,transform] duration-200 hover:bg-blue-400/[0.22] hover:-translate-y-0.5">
                  <MdUpdate className="text-base" />
                  Update
                </Link>

                <button
                  onClick={() => handleMovieDelete(_id)}
                  className="flex items-center justify-center gap-[0.4rem] py-[0.65rem] rounded-xl bg-red-500/[0.08] dark:bg-red-500/10 border border-red-500/[0.25] dark:border-red-500/[0.22] text-[#f87171] font-semibold text-sm cursor-pointer transition-[background,transform] duration-200 hover:bg-red-500/[0.22] hover:-translate-y-0.5">
                  <RiDeleteBin7Fill className="text-[0.95rem]" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
