import usePopularMovieList from "../Hooks/usePopularMovieList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";
import VideoTitle from "./VideoTitle";
import PopularMovieList from "./PopularMovieList";
import useNowPlayingMovieList from "../Hooks/useNowPlayingMovieList";
import NowPlayingMoviesList from "./NowPlayingMoviesList";

var HomeBody = () => {
  // This will fetch the popular movies & add in the redux store
  usePopularMovieList();
  // fetch the movies from the redux store
  const movieData = useSelector((state) => state.movie.movies);

   // This will fetch the now playing movies & add in the redux store
  useNowPlayingMovieList();

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
      <PopularMovieList />
      <NowPlayingMoviesList />
    </div>
  );
};

export default HomeBody;
