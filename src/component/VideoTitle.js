import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";

const VideoTitle = ({ movieData }) => {

  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux
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
      <Link to={`/playPopularMovie/${movieId}`} 
          state={{ from: movieData }}
      style={{ textDecoration: 'none' }}>
        <button className="play-movie-button">
          <FontAwesomeIcon icon={faPlay} className="button-icon" />
          <p>{lang[selectedLanguage].play}</p>
        </button>
        </Link>
        <button className="info-movie-button">
          <FontAwesomeIcon icon={faInfo} className="button-icon" />
          <p>{lang[selectedLanguage].info}</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
