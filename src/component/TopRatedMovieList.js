import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../utils/constants";
import lang from "../utils/LanguageConstants";

const TopRatedMovieList = () => {

   const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

  var topRatedMoviesLists = useSelector((state) => state.movie.topRatedMovies);
  // Extract 'results' array safely
  const topRatedMovies =
    topRatedMoviesLists.length > 0 && topRatedMoviesLists[0]?.results
      ? topRatedMoviesLists[0].results
      : [];
  console.log(`Top Rated Movie Lists: ${JSON.stringify(topRatedMovies)}`);

  return (
    <div id="TopRatedMovies" className="now-playing-movie-list-container">
      <h2>{lang[selectedLanguage].topRatedMovies}</h2>
      <div className="movie-scroll-container">
        {topRatedMovies.map((movie) => (
          <div className="movie-list-items" key={movie.id}>
            <Link to={`/playTopRatedMovie/${movie.id}`} state={{from: topRatedMoviesLists}}>
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

export default TopRatedMovieList;
