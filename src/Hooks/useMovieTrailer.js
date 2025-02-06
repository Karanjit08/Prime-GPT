import { useEffect, useState } from "react";
import { options } from "../utils/Utility";

const useMovieTrailer = (movieId) => {
  const [movieTrailerList, setMovieTrailerList] = useState([]);
  const [teaserVideo, setTeaserVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const movieTrailerData = await response.json();
        var movieTrailer = movieTrailerData.results;
        setMovieTrailerList(movieTrailer.results);

        // Find the first teaser video
        const teaser = movieTrailerData.results.find(
          (trailer) => trailer.type.toLowerCase() === "teaser"
        );
        setTeaserVideo(teaser || null);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieTrailer();
  }, [movieId]);

  return { teaserVideo, loading };
};

export default useMovieTrailer;
