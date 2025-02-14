
import {signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";

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
            <ul>
                <li onClick={() => console.log('Profile Clicked')}>{lang[selectedLanguage].profile}</li>
                <li onClick={() => console.log('Settings Clicked')}>{lang[selectedLanguage].settings}</li>
                <li onClick={handleUserLogOut}>{lang[selectedLanguage].logOut}</li>
            </ul>
        </div>
    );
}

export default DropDownProfile;