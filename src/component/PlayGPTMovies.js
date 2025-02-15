import React from "react";
import { useLocation, useParams } from "react-router-dom";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";

const PlayGPTMovies = () => {
  var location = useLocation();
  var { from } = location.state;
  var { movieId } = useParams();
  return (
    <div className="movie-trailer-container">
      {/* Background Video */}
      <VideoBackgroundPlayer movieId={movieId} />

      {/* { Movie title & Overview} */}
      <MovieInfo movieData={from} movieId={movieId} />
    </div>
  );
};

var MovieInfo = ({ movieData, movieId }) => {
    // Flatten the results from all movieData objects
    const allMovies = movieData.flatMap(movie => movie.results);

    // Find the movie that matches the movieId
    const selectedMovie = allMovies.find(movie => movie.id.toString() === movieId);
  
    if (!selectedMovie) {
      return <p>Movie details not found!</p>;
    }
  
    return (
      <div>
        {/* Overlay for better text visibility */}
        <div className="overlay"></div>
  
        {/* Movie Details */}
        <div className="movie-info">
          <h1 className="movie-title">{selectedMovie.title}</h1>
          <p className="movie-overview">{selectedMovie.overview}</p>
        </div>
      </div>
    );
  };
  

export default PlayGPTMovies;
