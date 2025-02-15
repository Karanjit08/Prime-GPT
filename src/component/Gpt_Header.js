import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axios from "axios";
import { options } from "../utils/Utility";
import { baseImageUrl } from "../utils/constants";

const GptHeader = () => {
  var searchText = useRef();

  var [searchMovieList, setSearchMovieList] = useState([]);

  var getMovies = async (movie) => {
    var response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    var data = await response.json();
    return data;
  };

  var handleSearchIconClick = async () => {
    // console.log(`Query: ${searchText.current.value}`);
    console.log("Loading...");
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await axios({
      method: "post",
      url: "",
      data: {
        contents: [
          {
            parts: [{ text: gptQuery }],
          },
        ],
      },
    });
    // Tumbbad, Bulbbul, Stree, Raat,  Darr
    // console.log(response.data.candidates[0].content.parts[0].text);

    // ['Tumbbad', ' Raat', ' Bulbbul', ' Stree', ' Darr\n']
    var dataArr = response.data.candidates[0].content.parts[0].text.split(",");
    console.log(dataArr);

    var data = dataArr.map((movie) => getMovies(movie));
    var movieData = await Promise.all(data);
    console.log(movieData);
    setSearchMovieList(movieData);
  };

  return (
    <div className="gpt">
      <div className="gpt-search-bar">
        <div className="search-container">
          <form>
            <input
              ref={searchText}
              type="text"
              className="search-box"
              placeholder="What would you like to watch..."
              name="search"
            ></input>
          </form>
        </div>
        <div className="header-search-icon" onClick={handleSearchIconClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </div>
      </div>
      <div className="gpt-results">
        {
          searchMovieList.map((movie, index) =>
            movie.results.length > 0 ? (
              <div className="movie-list-items" key={index}>
                <img
                  key={movie.results[0].id}
                  alt={movie.results[0].original_title}
                  src={`${baseImageUrl}${movie.results[0].poster_path}`}
                />
              </div>
            ) : null
          )
        }
      </div>
    </div>
  );
};

export default GptHeader;
