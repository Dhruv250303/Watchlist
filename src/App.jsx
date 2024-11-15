import { useEffect, useState } from "react";
// import Logo from './mainlogo.png'
import Navbar from "../components/Navbar";
import "./App.css";
import Home from "../components/Home";
import Watchlist from "../components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleaddtoWatchlist = (movieObj) => {
    let newWatchlsit = [...watchlist, movieObj];
    setWatchlist(newWatchlsit);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlsit));
    console.log(newWatchlsit);
  };

  let handleremovefromWatchlist = (movieObj) => {
    let filteredWatclist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    localStorage.setItem("moviesApp", JSON.stringify(filteredWatclist));

    setWatchlist(filteredWatclist);
    console.log(filteredWatclist);
  };

  useEffect(() => {
    let moviesfromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesfromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesfromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Banner />
                <Home
                  handleaddtoWatchlist={handleaddtoWatchlist}
                  handleremovefromWatchlist={handleremovefromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleremovefromWatchlist={handleremovefromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
