import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
        <a>Home</a>
        <a>Movies</a>
        <a>TV Shows</a>
        <a>Live TV</a>
        <a>Subcriptions</a>
      </div>
      <div className="welcome-header-right">
        <div className="header-search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <a>Home</a>
        <a>Movies</a>
        <button className="join-prime-header">Join Prime</button>

      </div>
    </div>
  );
};

export default WelcomeHeader;
