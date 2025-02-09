import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../utils/constants";

const UpcomingMovieList = () => {
  var upcomingMoviesLists = useSelector((state) => state.movie.upcomingMovies);
  // Extract 'results' array safely
  const upcomingMovies =
    upcomingMoviesLists.length > 0 && upcomingMoviesLists[0]?.results
      ? upcomingMoviesLists[0].results
      : [];
  console.log(`Top Rated Movie Lists: ${JSON.stringify(upcomingMovies)}`);

  return (
    <div className="now-playing-movie-list-container">
      <h2>Upcoming Movies</h2>
      <div className="movie-scroll-container">
        {upcomingMovies.map((movie) => (
          <div className="movie-list-items" key={movie.id}>
            <Link
              to={`/playTopRatedMovie/${movie.id}`}
              state={{ from: upcomingMoviesLists }}
            >
              <img
                key={movie.id}
                alt={movie.original_title}
                src={`${baseImageUrl}${movie.poster_path}`}
              ></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovieList;
