import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import VideoBackgroundPlayer from './VideoBackgroundPlayer';

const PlayPopularMovie = () => {
    var location = useLocation();
    var {from} = location.state;
    var { movieId } = useParams();

    return (
        <div className="movie-trailer-container">
          {/* Background Video */}
          <VideoBackgroundPlayer movieId={movieId} />
    
          {/* { Movie title & Overview} */}
          <MovieInfo movieData = {from} movieId = {movieId}/>
        </div>
      );
}

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

export default PlayPopularMovie