import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";
import VideoTitle from "./VideoTitle";

const PlayMovie = () => {
  var { movieId } = useParams();

  // fetch the movies from the redux store
  const movieData = useSelector((state) => state.movie.movies);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  return (
    <div className="movie-trailer-container">
      {/* Background Video */}
      <VideoBackgroundPlayer movieId={movieId} />

      {/* { Movie title & Overview} */}
      <MovieInfo movieData = {movieData} />
    </div>
  );
};

var MovieInfo = ({movieData}) => {
    var movieTitle = movieData?.[0]?.[0]?.original_title;
    var movieOverview = movieData?.[0]?.[0]?.overview;
  return (
    <div>
      {/* Overlay for better text visibility */}
      <div className="overlay"></div>

      {/* Movie Details */}
      <div className="movie-info">
        <h1 className="movie-title">{movieTitle}</h1>
        <p className="movie-overview">{movieOverview}</p>
      </div>
    </div>
  );
};

export default PlayMovie;
