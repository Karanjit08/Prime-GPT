import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { header_home_text, header_liveTv_text, header_movies_text, header_subscriptions_text, header_tvShow_text, header_joinPrime_text } from "../utils/constants";

var WelcomeHeader = () => {
  return (
    <div className="welcome-header">
      <div className="welcome-header-left">
        <div className="header-logo">
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
            alt="prime-logo"
          ></img>
        </div>
        <a>{header_home_text}</a>
        <a>{header_movies_text}</a>
        <a>{header_tvShow_text}</a>
        <a>{header_liveTv_text}</a>
        <a>{header_subscriptions_text}</a>
      </div>
      <div className="welcome-header-right">
        <div className="header-search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <button className="join-prime-header"><Link to={"/login"} className="join-prime-link">{header_joinPrime_text}</Link></button>

      </div>
    </div>
  );
};

export default WelcomeHeader;
