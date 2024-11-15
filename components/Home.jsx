import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Home({handleaddtoWatchlist,handleremovefromWatchlist, watchlist}) {
  const [movie, setMovies] = useState([]);
  const [pageno, setPage] = useState(1);

  const handlePrev = () => {
    if (pageno == 1) {
      setPage(1);
    } else {
      setPage(pageno - 1);
    }
  };

  const handleNext = () => {
    setPage(pageno + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=6fff37a3c6a5d816fa1ce7b2bd8046dd&language=en-US&page=${pageno}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageno]);

  return (
    <div className="m-5">
      <div className="w-full text-center p-2 text-2xl font-bold">
        Trending Movies
      </div>

      <div className="flex flex-row flex-wrap justify-around">
        {movie.map((mobj) => {
          return (
            <MovieCard
            movieObj={mobj} key={mobj.id}
              poster_path={mobj.poster_path}
              name={mobj.original_title} handleaddtoWatchlist={handleaddtoWatchlist} handleremovefromWatchlist={handleremovefromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>

      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        pageno={pageno}
      />
    </div>
  );
}

export default Home;
