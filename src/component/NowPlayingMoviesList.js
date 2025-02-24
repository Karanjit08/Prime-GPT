import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../utils/constants";
import lang from "../utils/LanguageConstants";

const NowPlayingMoviesList = () => {
    const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

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
    <div id="NowPlayingMovies" className="now-playing-movie-list-container">
      <h2>{lang[selectedLanguage].nowPlayingMovies}</h2>
      <div className="movie-scroll-container">
        {nowPlayingMovies.map((movie) => (
          <div className="movie-list-items" key={movie.id}>
            <Link to={`/playTopRatedMovie/${movie.id}`} state={{from: nowPlayingMoviesLists}}>
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
