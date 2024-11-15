import React from "react";

function MovieCard({
  poster_path,
  name,
  handleaddtoWatchlist,
  movieObj,
  handleremovefromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end m-1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => handleremovefromWatchlist(movieObj)} className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-slate-400/40">&#10060;</div>
      ) : (
        <div
          onClick={() => handleaddtoWatchlist(movieObj)}
          className="m-2 flex justify-center h-8 w-8 items-center rounded-lg bg-slate-400/40"
        >
          &#128149;
        </div>
      )}

      <div className="text-white text-center bg-gray-900/60 w-full p-2 text-xl rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
