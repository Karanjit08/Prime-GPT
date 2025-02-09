import usePopularMovieList from "../Hooks/usePopularMovieList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackgroundPlayer from "./VideoBackgroundPlayer";
import VideoTitle from "./VideoTitle";
import PopularMovieList from "./PopularMovieList";
import useNowPlayingMovieList from "../Hooks/useNowPlayingMovieList";
import NowPlayingMoviesList from "./NowPlayingMoviesList";
import useTopRatedMovieList from "../Hooks/useTopRatedMovieList";
import TopRatedMovieList from "./TopRatedMovieList";
import useUpcomingMovieList from "../Hooks/useUpcomingMovieList";
import UpcomingMovieList from "./UpcomingMovieList";

var HomeBody = () => {
  // This will fetch the popular movies & add in the redux store
  usePopularMovieList();
  // fetch the movies from the redux store
  const movieData = useSelector((state) => state.movie.movies);

   // This will fetch the now playing movies & add in the redux store
  useNowPlayingMovieList();

    // This will fetch the top rated playing movies & add in the redux store
  useTopRatedMovieList();

     // This will fetch the upcoming movies & add in the redux store
  useUpcomingMovieList();

  // Get first movie ID from Popular Movies
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
      <TopRatedMovieList />
      <UpcomingMovieList />
    </div>
  );
};

export default HomeBody;
