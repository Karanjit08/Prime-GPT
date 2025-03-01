
import {signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut} from "@fortawesome/free-solid-svg-icons";

var DropDownProfile = ({onMouseEnter, onMouseLeave}) => {
    const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

    var navigator = useNavigate();
    var handleUserLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigator("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="drop-down-profile">
            <ul className="drop-down-logout">
            <FontAwesomeIcon  icon={faSignOut} size="2x" onClick={handleUserLogOut}/>
                <li onClick={handleUserLogOut}>{lang[selectedLanguage].logOut}</li>
            </ul>
        </div>
    );
}

export default DropDownProfile;