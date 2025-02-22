import { useState } from "react";
import DropDownProfile from "./Drop_Down_Profile";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLanguagePreference } from "../utils/languageSlice";
import lang from "../utils/LanguageConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import Hamburger from "hamburger-react";

var HomeHeader = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.languageConfig
  ); // Get language from Redux

  // Handle language change
  const handleLanguageChange = (event) => {
    dispatch(addLanguagePreference(event.target.value)); // Dispatch action to update Redux store
  };

  var [openProfileDropDown, setOpenProfileDropDown] = useState(false);

  var handleMouseEnter = () => {
    setOpenProfileDropDown(true);
  };

  var handleMouseLeave = () => {
    setOpenProfileDropDown(false);
  };
  return isMobile ? (
    <div className="home-screen-mobile-header">
        <div className="header-logo">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
            alt="prime-logo"
          ></img>
        </div>
        <div className="hamburger-logo">
          <Hamburger />
        </div>
    </div>
  ) : (
    <div className="home-screen-header">
      <div className="h-header-left">
        <div className="header-logo">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
            alt="prime-logo"
          ></img>
        </div>
        <a>{lang[selectedLanguage].home}</a>
        <a>
          <ScrollLink
            activeClass="active"
            to="PopularMovies"
            spy={true}
            smooth={true}
          >
            {lang[selectedLanguage].popularMovies}
          </ScrollLink>
        </a>
        <a>
          <ScrollLink to="NowPlayingMovies" spy={true} smooth={true}>
            {lang[selectedLanguage].nowPlayingMovies}
          </ScrollLink>
        </a>
        <a>
          <ScrollLink to="TopRatedMovies" spy={true} smooth={true}>
            {lang[selectedLanguage].topRatedMovies}
          </ScrollLink>
        </a>
        <a>
          <ScrollLink to="UpcomingMovies" spy={true} smooth={true}>
            {lang[selectedLanguage].upcomingMovies}
          </ScrollLink>
        </a>
      </div>
      <div className="h-header-right">
        <Link to="/gptSearch">
          <div className="home-chat-icon">
            <FontAwesomeIcon icon={faMessage} size="2x" />
          </div>
        </Link>
        <div
          className="profile-logo"
          onClick={() => setOpenProfileDropDown(!openProfileDropDown)}
        >
          <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"></img>
        </div>

        {openProfileDropDown && (
          <DropDownProfile
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        <div className="drop-down-lang">
          <select
            name="Localization"
            id="lang"
            class="custom-select"
            value={selectedLanguage} // Bind value to Redux state
            onChange={handleLanguageChange} // Handle change
          >
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
