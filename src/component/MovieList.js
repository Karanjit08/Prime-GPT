import React from "react";
import { useSelector } from "react-redux";
import { baseImageUrl } from "../utils/constants";

const MovieList = () => {
  // fetch the popular movies from the redux store
  const popularMovieData = useSelector((state) => state.movie.movies);

  //   console.log('Popular Movie lists:', JSON.stringify(popularMovieData, null, 2));
  const movies = popularMovieData.length > 0 ? popularMovieData[0] : [];
  console.log(`Popular Movie Lists: ${JSON.stringify(movies)}`)

  return (
    <div>
    <h2>Popular Movies</h2>
      {
        // Map through the correct data
        movies.map((movie) => (
           <img 
           key={movie.id}
             alt={movie.original_title} 
            src={`${baseImageUrl}${movie.poster_path}`}></img>
        ))
      }
    </div>
  );
};

export default MovieList;
