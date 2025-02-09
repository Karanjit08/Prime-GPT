import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../utils/constants";

const NowPlayingMoviesList = () => {
  var nowPlayingMoviesLists = useSelector(
    (state) => state.movie.nowPlayingMovies
  );
  // Extract 'results' array safely
  const nowPlayingMovies =
    nowPlayingMoviesLists.length > 0 && nowPlayingMoviesLists[0]?.results
      ? nowPlayingMoviesLists[0].results
      : [];
  console.log(`Now Playing Movie Lists: ${JSON.stringify(nowPlayingMovies)}`);

  return (
      <div className="now-playing-movie-list-container">
      <h2>Now Playing Movies</h2>
      <div className="movie-scroll-container">
        {nowPlayingMovies.map((movie) => (
          <div className="movie-list-items">
            <Link to={`/playMovie/${movie.id}`}>
              <img
                key={movie.id}
                alt={movie.original_title}
                src={`${baseImageUrl}${movie.poster_path}`}
              ></img>
            </Link>
          </div>
        ))}
        </div>
      </div>
    
  );
};

export default NowPlayingMoviesList;
