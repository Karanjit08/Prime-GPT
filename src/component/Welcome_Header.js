import { Link } from "react-router-dom";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addLanguagePreference } from "../utils/languageSlice";

var WelcomeHeader = () => {

  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

  // Handle language change
  const handleLanguageChange = (event) => {
    dispatch(addLanguagePreference(event.target.value)); // Dispatch action to update Redux store
  };


  return (
    <div className="welcome-header">
      <div className="welcome-header-left">
        <div className="header-logo">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
            alt="prime-logo"
          ></img>
        </div>
      </div>
      <div className="welcome-header-right">
        <button className="join-prime-header">
          <Link to={"/login"} className="join-prime-link">
            {lang[selectedLanguage].joinPrime}
          </Link>
        </button>
        <div className="drop-down-lang">
          <select name="Localization" id="lang"  class="custom-select"
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

export default WelcomeHeader;
