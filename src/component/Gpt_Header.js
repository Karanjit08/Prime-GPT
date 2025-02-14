import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";



const GptHeader = () => {
  var searchText = useRef();
  var handleSearchIconClick = async () => {
    console.log(`Query: ${searchText.current.value}`);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  };

  return (
    <div className="gpt-header">
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
  );
};

export default GptHeader;
