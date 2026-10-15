import { FaFilm, FaPlusCircle, FaBookmark, FaEdit } from "react-icons/fa";
export const features = [
  {
    icon: FaFilm,
    title: "Browse the catalogue",
    body: "Every movie on the site, sorted by rating. Log in to open a title for its summary, genres and runtime.",
    to: "/allMovies",
    cta: "Browse movies",
    needsLogin: false,
  },
  {
    icon: FaPlusCircle,
    title: "Add a movie",
    body: "Share a film others should see, with its poster, genres, runtime, release year, rating and a short summary.",
    to: "/addMovie",
    cta: "Add a movie",
    needsLogin: true,
  },
  {
    icon: FaBookmark,
    title: "Keep favourites",
    body: "Save movies to your own favourites list and come back to them any time.",
    to: "/myFavorites",
    cta: "Open favourites",
    needsLogin: true,
  },
  {
    icon: FaEdit,
    title: "Edit what you've added",
    body: "Fix a detail or remove a movie from its details page.",
    to: "/allMovies",
    cta: "Find a movie",
    needsLogin: true,
  },
];