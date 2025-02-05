import { options } from "../utils/Utility";
import useMovieList from "../Hooks/useMovieList";
import { useState } from "react";
import { useSelector } from "react-redux";

var HomeBody = () => {

    var [movieTrailerList,setMovieTrailerList] = useState([]);
//     var getPopularMovieLists = async() => {
//       var data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',options);
//       var popularMovieLists = await data.json();
//       console.log(popularMovieLists.results);
//       movieId = popularMovieLists.results[1].id;
//       console.log(movieId);
//       dispatch(addMovies(popularMovieLists.results));
//       getMovieTrailer(movieId);
//   }

    useMovieList();
    var movieData = useSelector((data) => data.movie.movies[0]);
    console.log('printing....')
    console.log(movieData)
    // getMovieTrailer(movieData.id);
  
  
  var getMovieTrailer = async(movieId) => {
    var data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options);
    var movieTrailerData = await data.json();
    var movieTrailer = movieTrailerData.results;
    setMovieTrailerList(movieTrailer);
    console.log(movieTrailer);
  }
  


    return (
        <div>
        {
            movieTrailerList.length === 0 ? <h3>Loading...</h3> :
            movieTrailerList.map((trailer) =>(
                <div key={trailer.id}>
                <h2>{trailer.type}</h2>
                </div>
            )
            )
        } 
        </div>
    );
}

export default HomeBody;