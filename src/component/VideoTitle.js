import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ movieData }) => {
  // Get first movie ID
  const movieId = movieData?.[0]?.[0]?.id;
  var movieTitle = movieData?.[0]?.[0]?.original_title;
  var movieOverview = movieData?.[0]?.[0]?.overview;
  console.log("Selected ID:", movieId);
  return (
    <div>
      {/* Overlay for better text visibility */}
      <div className="overlay"></div>

      {/* Movie Details */}
      <div className="movie-info">
        <h1 className="movie-title">{movieTitle}</h1>
        <p className="movie-overview">{movieOverview}</p>
      </div>

      {/* Movie Buttons */}
      <div className="buttons">
        <button className="play-movie">
          <FontAwesomeIcon icon={faPlay} className="button-icon" />
          <p>Play</p>
        </button>
        <button className="play-movie">
          <FontAwesomeIcon icon={faInfo} className="button-icon" />
          <p>Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
