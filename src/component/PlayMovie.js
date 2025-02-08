import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";


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
      <MovieInfo movieData = {movieData} movieId = {movieId}/>
    </div>
  );
};

var MovieInfo = ({movieData,movieId}) => {
    // Find the movie that matches the given movieId
  const movie = movieData[0]?.find((movie) => movie?.id?.toString() === movieId);

  var movieTitle = movie?.original_title || "Title Not Available";
  var movieOverview = movie?.overview || "Overview Not Available";
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
