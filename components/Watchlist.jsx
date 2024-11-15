import React, { useEffect, useState } from "react";
import genre_id from "./genre.js";

function Watchlist({ watchlist, setWatchlist, handleremovefromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [crntGenre, setCrntGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCrntGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((mobj) => {
      return genre_id[mobj.genre_ids[0]];
    });
    temp =new Set(temp)
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                crntGenre == genre ? (
                  "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-2xl text-white font-bold mx-4 my-2"
                ) : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-2xl text-white font-bold mx-4 my-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-6">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="h-[2rem] w-[25rem] bg-gray-500/20 outline-none px-6 rounded-lg"
        />
      </div>

      <div className="border border-gray-300 m-8">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-up-long"></i>
                </div>
                <div className="mx-2">Rating</div>
                <div onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down-long"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((mobj)=>{
              if(crntGenre=='All Genres'){
                return true
              }
              else {
                return genre_id[mobj.genre_ids[0]] == crntGenre
              }
            })
              .filter((mobj) => {
                return mobj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((mobj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-4">
                      <img
                        className="w-[15vh] items-center rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${mobj.poster_path}`}
                      />
                      <div className="mx-6">{mobj.original_title}</div>
                    </td>
                    <td>{mobj.vote_average}</td>
                    <td>{mobj.popularity}</td>
                    <td>{genre_id[mobj.genre_ids[0]]}</td>
                    <td>
                      <button
                      onClick={()=>handleremovefromWatchlist(mobj)}
                        className="border bg-red-600 px-2"
                        style={{ borderRadius: "16px" }}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
