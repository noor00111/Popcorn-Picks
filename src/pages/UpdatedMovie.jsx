import React, { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import Select from 'react-select';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeController/DarkLightMode.jsx';
import { MdMovieEdit } from 'react-icons/md';
import { FaFilm, FaLink, FaAlignLeft } from 'react-icons/fa';
import SectionEyebrow from '../components/AddandUpdate/SectionEyebrow.jsx';
import FieldLabel from '../components/AddandUpdate/FieldLabel.jsx';
import FieldError from '../components/AddandUpdate/FieldError.jsx';
import { genres, years } from '../utls/genresAndYears.js';
import { useUpdateSelectStyles } from '../styles/updateMovieSelect.js';


const UpdatedMovie = () => {
  const updatedMovieData = useLoaderData();
  const { _id, poster, title, genre, duration, year, rating, summary } = updatedMovieData;
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [updatedRating, setUpdatedRating] = useState(rating);
  const { user }   = useContext(AuthContext);
  const navigate   = useNavigate();
  const { isDark } = useTheme();
  const { selectStyles } = useUpdateSelectStyles();

  const inputClass = "w-full px-[0.875rem] py-[0.65rem] rounded-[0.6rem] bg-[#fafaf8] dark:bg-white/5 border-[1.5px] border-black/[0.13] dark:border-white/10 text-bodyColor placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm font-paraFont outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#f5c518] focus:shadow-[0_0_0_3px_rgba(245,197,24,0.18)]";


  const defaultGenre = Array.isArray(genre)
    ? genre.map(g => genres.find(opt => opt.value === g)).filter(Boolean)
    : [];
  const defaultYear = years.find(y => y.value === String(year)) || null;
  const handleRating = (rate) => setUpdatedRating(rate);

  const handleUpdateMovie = (data) => {
    const genreValues = Array.isArray(data.genre)
      ? data.genre.map(g => (typeof g === 'object' ? g.value : g))
      : [];
    const yearValue = data.year?.value || data.year;

    const payload = {
      poster: data.poster,
      title:  data.title,
      genre:  genreValues,
      duration: Number(data.duration),
      year:   yearValue,
      rating: updatedRating,
      summary: data.summary,
      email:  user.email,
    };

    fetch(`https://popcorn-picks-server.vercel.app/movies/${_id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated!',
            text:  'Movie updated successfully.',
            icon:  'success',
            confirmButtonText: 'View Movies',
            confirmButtonColor: '#f5c518',
          });
          navigate('/allMovies');
        }
      });
  };

  return (
    <div className="bg-backgroundColor min-h-screen px-4 py-8 transition-[background] duration-300">
      <div className="max-w-[760px] mx-auto">

        <div className="rounded-t-2xl overflow-hidden bg-[#09090f]">
          <div className="h-[14px] bg-[repeating-linear-gradient(90deg,#f5c518_0,#f5c518_28px,#09090f_28px,#09090f_56px)]" />
          <div className="flex gap-[6px] px-4 pt-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#1a1a2e] shrink-0" />
            ))}
          </div>
          <div className="flex items-center gap-3 px-6 pt-3 pb-5">
            <MdMovieEdit className="text-[#f5c518] text-[1.4rem]" />
            <h1 className="font-titleFont text-[clamp(1.6rem,4vw,2.2rem)] text-white [text-wrap:balance]">
              Update a Film
            </h1>
          </div>
        </div>

        <div className="bg-white dark:bg-[#0d0d1a] border border-black/[0.09] dark:border-white/[0.07] border-t-0 rounded-b-2xl px-8 pt-8 pb-10 shadow-[0_16px_48px_rgba(0,0,0,0.09)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.60)]">
          <form onSubmit={handleSubmit(handleUpdateMovie)} noValidate>

            <SectionEyebrow label="Movie Identity" isDark={isDark} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <FieldLabel htmlFor="poster" isDark={isDark}>
                  <FaLink className="inline mr-[0.3rem] text-[0.7rem]" />
                  Poster URL
                </FieldLabel>
                <input
                  id="poster" type="url" autoComplete="off"
                  placeholder="https:///poster.jpg"
                  className={inputClass}
                  defaultValue={poster}
                  {...register("poster", {
                    required: "Poster URL is required",
                    pattern: { value: /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i, message: "Must be a valid image URL" },
                  })}
                />
                {errors.poster && <FieldError msg={errors.poster.message} />}
              </div>
              <div>
                <FieldLabel htmlFor="title" isDark={isDark}>
                  <FaFilm className="inline mr-[0.3rem] text-[0.7rem]" />
                  Movie Title
                </FieldLabel>
                <input
                  id="title" type="text" autoComplete="off"
                  placeholder="e.g. Inception"
                  className={inputClass}
                  defaultValue={title}
                  {...register("title", {
                    required: "Movie title is required",
                    minLength: { value: 2, message: "Must have at least 2 characters" },
                  })}
                />
                {errors.title && <FieldError msg={errors.title.message} />}
              </div>
            </div>

            <SectionEyebrow label="Details" isDark={isDark} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <FieldLabel isDark={isDark}>Genre</FieldLabel>
                <Controller
                  name="genre" control={control} defaultValue={defaultGenre}
                  rules={{ required: "At least one genre is required" }}
                  render={({ field }) => (
                    <Select {...field} inputId="genre" options={genres} isMulti placeholder="Select genres" styles={selectStyles} />
                  )}
                />
                {errors.genre && <FieldError msg={errors.genre.message} />}
              </div>
              <div>
                <FieldLabel htmlFor="duration" isDark={isDark}>Duration (minutes)</FieldLabel>
                <input
                  id="duration" type="number" placeholder="e.g. 120"
                  className={inputClass}
                  defaultValue={duration}
                  {...register("duration", {
                    required: "Duration is required",
                    validate: (v) => Number(v) > 60 || "Duration must exceed 60 minutes",
                  })}
                />
                {errors.duration && <FieldError msg={errors.duration.message} />}
              </div>
              <div>
                <FieldLabel isDark={isDark}>Release Year</FieldLabel>
                <Controller
                  name="year" control={control} defaultValue={defaultYear}
                  rules={{ required: "Release year is required" }}
                  render={({ field }) => (
                    <Select {...field} inputId="year" options={years} placeholder="Select year" styles={selectStyles} />
                  )}
                />
                {errors.year && <FieldError msg={errors.year.message} />}
              </div>
              <div>
                <FieldLabel isDark={isDark}>Rating</FieldLabel>
                <div className="px-[0.875rem] py-2 border-[1.5px] border-black/[0.13] dark:border-white/10 rounded-[0.6rem] bg-[#fafaf8] dark:bg-white/5">
                  <Rating
                    onClick={handleRating}
                    initialValue={updatedRating}
                    size={24}
                    fillColor="#f5c518"
                    emptyColor={isDark ? '#374151' : '#d1d5db'}
                    style={{ display: 'block' }}
                  />
                </div>
                {updatedRating === 0 && <FieldError msg="Rating is required" />}
              </div>
            </div>

            <SectionEyebrow label="Story" isDark={isDark} />
            <div className="mb-8">
              <FieldLabel htmlFor="summary" isDark={isDark}>
                <FaAlignLeft className="inline mr-[0.3rem] text-[0.7rem]" />
                Summary
              </FieldLabel>
              <textarea
                id="summary" rows={4}
                placeholder="Short synopsis of the movie"
                className={`${inputClass} resize-y`}
                defaultValue={summary}
                {...register("summary", {
                  required: "Summary is required",
                  minLength: { value: 10, message: "Summary must have at least 10 characters" },
                })}
              />
              {errors.summary && <FieldError msg={errors.summary.message} />}
            </div>

            <button
              type="submit"
              className="w-full py-[0.875rem] rounded-xl flex items-center justify-center gap-2 text-base font-paraFont btn-gold">
              <MdMovieEdit className="text-[1.1rem]" />
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedMovie;
