import React from "react";
import { baseImageUrl } from "../utils/constants";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const GptResults = ({ movieData, isLoading }) => {
  return (
    <div className="gpt-results">
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader className="loader" color="#36D7B7" size={50} />
        </div>
      ) : (
        <div className="gpt-movie-scroll-container">
          {movieData.map((movie, index) =>
            movie.results.length > 0 ? (
              <div className="movie-list-items" key={index}>
                <Link to={`/playGptMovies/${movie.results[0].id}`} state={{from: movieData}}>
                <img
                  key={movie.results[0].id}
                  alt={movie.results[0].original_title}
                  src={`${baseImageUrl}${movie.results[0].poster_path}`}
                />
                </Link>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default GptResults;
