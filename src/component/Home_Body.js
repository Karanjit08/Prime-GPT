import useMovieList from "../Hooks/useMovieList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";
import VideoTitle from "./VideoTitle";
import MovieList from "./MovieList";

var HomeBody = () => {
  // This will fetch the popular movies & add in the redux store
  useMovieList();
  // fetch the movies from the redux store
  const movieData = useSelector((state) => state.movie.movies);

  // Get first movie ID
  const movieId = movieData?.[0]?.[0]?.id;
  console.log("Selected ID:", movieId);

  return (
    <div className="home-body">
      <div className="movie-trailer-container">
        {/* Background Video */}
        <VideoBackgroundPlayer movieId={movieId} />

        {/* { Movie title & Overview} */}
        <VideoTitle movieData={movieData} />
      </div>
      <div className="movie-list">
      <MovieList />
      </div>
    </div>
  );
};

export default HomeBody;
