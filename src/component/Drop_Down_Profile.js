
import {signOut } from "firebase/auth";
import {auth} from '../utils/Firebase'
import { useNavigate } from "react-router-dom";

var DropDownProfile = ({onMouseEnter, onMouseLeave}) => {

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
                <li onClick={() => console.log('Profile Clicked')}>Profile</li>
                <li onClick={() => console.log('Settings Clicked')}>Settings</li>
                <li onClick={handleUserLogOut}>Log Out</li>
            </ul>
        </div>
    );
}

export default DropDownProfile;