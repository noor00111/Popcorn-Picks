import { useEffect, useState } from "react";
import { bannerMovies } from "../../utls/bannerData";
import "../../styles/loader.css";


const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const imagePromises = bannerMovies.map(
      (movie) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; 
          img.src = movie.poster;
        })
    );

    const maxWait = new Promise((resolve) => setTimeout(resolve, 8000));
    const minWait = new Promise((resolve) => setTimeout(resolve, 3000));
    const imagesReady = Promise.race([Promise.all(imagePromises), maxWait]);

    Promise.all([imagesReady, minWait]).then(() => {
      setLoading(false);                      
      setTimeout(() => setHidden(true), 600); 
    });
  }, []);

  if (hidden) return null;

  return (
    <div className={`leader-screen ${loading ? "" : "leader-screen--done"}`} role="status" aria-live="polite">

      <div className="leader-strip leader-strip--left" aria-hidden="true" />
      <div className="leader-strip leader-strip--right" aria-hidden="true" />

      <div className="leader" aria-hidden="true">
        <div className="leader-sweep" />
        <div className="leader-ring leader-ring--outer" />
        <div className="leader-ring leader-ring--inner" />
        <div className="leader-cross" />
        <span className="leader-num leader-num--3">3</span>
        <span className="leader-num leader-num--2">2</span>
        <span className="leader-num leader-num--1">1</span>
      </div>

      <p className="font-titleFont text-4xl mt-8 text-[var(--auth-accent-text)]">
        PopcornPicks
      </p>
      <p className="mt-1 text-xs tracking-[0.3em] uppercase text-colorMuted">
        Loading
      </p>
    </div>
  );
};

export default PageLoader;
