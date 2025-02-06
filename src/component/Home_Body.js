import { options } from "../utils/Utility";
import useMovieList from "../Hooks/useMovieList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

var HomeBody = () => {


    // This will fetch the popular movies & add in the redux store
  useMovieList();
  // fetch the movies from the redux store
  const movieData = useSelector((state) => state.movie.movies);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

   // Get first movie ID
   const movieId = movieData?.[0]?.[0]?.id;
   console.log("Selected ID:", movieId);

    // Use the custom hook to fetch the teaser video
  const { teaserVideo, loading } = useMovieTrailer(movieId);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : teaserVideo ? (
        <div key={teaserVideo.id}>
          <h2>{teaserVideo.name}</h2>
          <iframe
            title={teaserVideo.name}
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${teaserVideo.key}?autoplay=1&mute=1`}
          ></iframe>
        </div>
      ) : (
        <h3>No teaser available</h3>
      )}
    </div>
  );
};

export default HomeBody;
