import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeController/DarkLightMode.jsx';
import { FaFilm, FaPlusCircle } from 'react-icons/fa';
import FieldError from '../components/AddandUpdate/FieldError.jsx';
import SectionEyebrow from '../components/AddandUpdate/SectionEyebrow.jsx';
import FieldLabel from '../components/AddandUpdate/FieldLabel.jsx';
import { genres, years } from '../utls/genresAndYears.js';
import { useSelectStyles } from '../styles/addMovieSelect.js';


const AddMovies = () => {
  const [errors, setErrors]           = useState({});
  const [rating, setRating]           = useState(0);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedYear,  setSelectedYear]  = useState(null);
  const { user }    = useContext(AuthContext);
  const navigate    = useNavigate();
  const { isDark }  = useTheme();
  const sel = useSelectStyles();


  const handleAddMovie = e => {
    e.preventDefault();
    const form     = e.target;
    const poster   = form.poster.value;
    const title    = form.title.value;
    const duration = form.duration.value;
    const summary  = form.summary.value;
    const genre    = selectedGenre.map(g => g.value);
    const year     = selectedYear?.value ?? '';

    const errs = {};
    if (!poster.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i))
      errs.poster   = 'Must be a valid image URL ending in .jpg, .jpeg, .png, or .gif';
    if (title.trim().length < 2)
      errs.title    = 'Title must be at least 2 characters';
    if (!genre.length)
      errs.genre    = 'Select at least one genre';
    if (!duration || Number(duration) <= 60)
      errs.duration = 'Duration must exceed 60 minutes';
    if (!year)
      errs.year     = 'Release year is required';
    if (rating === 0)
      errs.rating   = 'Give the movie a rating';
    if (summary.trim().length < 10)
      errs.summary  = 'Summary must be at least 10 characters';

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    fetch('https://popcorn-picks-server.vercel.app/movies', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ poster, title, genre, duration, year, rating, summary, email: user.email }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({ title: 'Added!', text: 'Movie added to the collection.', icon: 'success', confirmButtonText: 'View Collection' });
          navigate('/allMovies');
        }
      })
      .catch(() => toast.error('Failed to add movie. Please try again.'));
  };

  const inputClass = "w-full px-4 py-3 rounded-[0.625rem] bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(255,255,255,0.05)] border-[1.5px] border-black/[0.13] dark:border-white/10 text-bodyColor text-sm font-paraFont transition-[border-color,box-shadow] duration-200 focus:border-[#f5c518] focus:shadow-[0_0_0_3px_rgba(245,197,24,0.15)] outline-none box-border bg-[#fafaf8] dark:bg-[rgba(255,255,255,0.05)]";

  return (
    <div className="bg-backgroundColor min-h-screen px-5 pt-12 pb-16 transition-[background] duration-300">
      <div className="max-w-[760px] mx-auto">

        <div className="bg-[#09090f] rounded-t-2xl overflow-hidden">
          <div className="h-2 bg-[repeating-linear-gradient(90deg,#f5c518_0,#f5c518_28px,#09090f_28px,#09090f_56px)]" />

          <div className="px-10 pt-8 pb-7">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 bg-[linear-gradient(135deg,#f5c518,#e5a800)] rounded-[0.625rem] flex items-center justify-center shadow-[0_4px_18px_rgba(245,197,24,0.45)]">
                <FaFilm className="text-[#09090f] text-[1.1rem]" />
              </div>

              <div>
                <p className="text-white/[0.35] text-[0.62rem] tracking-[0.22em] uppercase font-bold mb-[0.2rem]">
                  Popcorn Picks
                </p>
                <h1 className="font-titleFont text-[clamp(1.6rem,4vw,2.25rem)] text-white leading-none [text-wrap:balance] m-0">
                  Add to the Collection
                </h1>
              </div>
            </div>

            <p className="text-white/[0.40] text-[0.845rem] leading-[1.75] mt-4 mb-6 max-w-[480px]">
              Every great film deserves a place here. Fill in the details below and cast this movie into the Popcorn Picks universe.
            </p>

            <div className="flex items-center gap-[0.45rem]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-[5px] h-[5px] rounded-full bg-white/10 shrink-0" />
              ))}
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0d0d1a] border border-black/[0.08] dark:border-white/[0.07] border-t-0 rounded-b-2xl shadow-[0_24px_64px_rgba(0,0,0,0.09)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.65)] px-10 pt-9 pb-10 transition-[background,box-shadow] duration-300">
          <form onSubmit={handleAddMovie}>

            <SectionEyebrow label="Film Identity" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div>
                <FieldLabel htmlFor="poster" label="Poster URL" />
                <input
                  id="poster" name="poster" type="url" autoComplete="url"
                  placeholder="https://example.com/poster.jpg"
                  className={inputClass}
                />
                <FieldError msg={errors.poster} />
              </div>
              <div>
                <FieldLabel htmlFor="title" label="Movie Title" />
                <input
                  id="title" name="title" type="text" autoComplete="off"
                  placeholder="e.g. The Grand Illusion"
                  className={inputClass}
                />
                <FieldError msg={errors.title} />
              </div>
            </div>

            <div className="h-px bg-black/[0.08] dark:bg-white/[0.07] mb-8" />
            <SectionEyebrow label="Production Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div>
                <FieldLabel htmlFor="genre" label="Genre" />
                <Select
                  inputId="genre" name="genre" options={genres}
                  isMulti styles={sel} placeholder="Select genres"
                  value={selectedGenre} onChange={setSelectedGenre}
                />
                <FieldError msg={errors.genre} />
              </div>
              <div>
                <FieldLabel htmlFor="duration" label="Duration (minutes)" />
                <input
                  id="duration" name="duration" type="number" autoComplete="off"
                  placeholder="e.g. 120" min="1"
                  className={inputClass}
                />
                <FieldError msg={errors.duration} />
              </div>
              <div>
                <FieldLabel htmlFor="year" label="Release Year" />
                <Select
                  inputId="year" name="year" options={years}
                  styles={sel} placeholder="Select year"
                  value={selectedYear} onChange={setSelectedYear}
                />
                <FieldError msg={errors.year} />
              </div>
              <div>
                <FieldLabel label="Your Rating" />
                <div
                  role="group"
                  aria-label="Movie rating"
                  className="w-full px-4 py-3 rounded-[0.625rem] bg-[#fafaf8] dark:bg-white/5 border-[1.5px] border-black/[0.13] dark:border-white/10 flex items-center min-h-[48px]"
                >
                  <Rating
                    onClick={val => setRating(val)}
                    initialValue={rating}
                    size={24}
                    fillColor="#f5c518"
                    emptyColor={isDark ? '#374151' : '#d1d5db'}
                    SVGstyle={{ display: 'inline' }}
                  />
                </div>
                <FieldError msg={errors.rating} />
              </div>
            </div>

            <div className="h-px bg-black/[0.08] dark:bg-white/[0.07] mb-8" />

            <SectionEyebrow label="The Story" />
            <div className="mb-9">
              <FieldLabel htmlFor="summary" label="Summary" />
              <textarea
                id="summary" name="summary"
                placeholder="A brief, spoiler-free description of the film"
                rows={4}
                className={`${inputClass} resize-y leading-[1.75] min-h-[110px]`}
              />
              <FieldError msg={errors.summary} />
            </div>

            <button
              type="submit"
              className="w-full py-[0.9rem] px-6 rounded-xl flex items-center justify-center gap-[0.55rem] text-[0.95rem] tracking-[0.03em] btn-gold">
              <FaPlusCircle className="text-[0.9rem]" />
              Add Movie to Collection
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddMovies;
