import React from "react";
import { useSelector } from "react-redux";
import { baseImageUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import lang from "../utils/LanguageConstants";

const PopularMovieList = () => {

  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

  // fetch the popular movies from the redux store
  const popularMovieData = useSelector((state) => state.movie.movies);

  //   console.log('Popular Movie lists:', JSON.stringify(popularMovieData, null, 2));
  const movies = popularMovieData.length > 0 ? popularMovieData[0] : [];
  console.log(`Popular Movie Lists: ${JSON.stringify(movies)}`);

  // Function to handle click event
  const handleMovieClick = (movie) => {
    console.log(`Movie Clicked: ${movie.title} (ID: ${movie.id})`);
  };
  
  return (
    <div id="PopularMovies" className="movie-list-container">
      <h2>{lang[selectedLanguage].popularMovies}</h2>
      <div className="movie-scroll-container">
        {
          // Map through the correct data
          movies.map((movie) => (
            <div className="movie-list-items">
              <Link to={`/playPopularMovie/${movie.id}`} state={{from: popularMovieData}}  ><img
                key={movie.id}
                alt={movie.original_title}
                src={`${baseImageUrl}${movie.poster_path}`}
                onClick={() => handleMovieClick(movie)} 
              ></img>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PopularMovieList;
