import { useState } from "react";
import DropDownProfile from "./Drop_Down_Profile";

var HomeHeader = () => {

    var [openProfileDropDown,setOpenProfileDropDown] = useState(false);

    var handleMouseEnter = () => {
        setOpenProfileDropDown(true);
    }

    var handleMouseLeave = () => {
        setOpenProfileDropDown(false);
    }
  return (
    <div className="home-screen-header">
      <div className="h-header-left">
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
      <div className="h-header-right">
        <button className="chat-button-header">Chat with Us</button>
        <div className="profile-logo" 
        onClick={() => setOpenProfileDropDown(!openProfileDropDown)}
        >
          <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"></img>
        </div>

        {openProfileDropDown && ( 
             <DropDownProfile onMouseEnter = {handleMouseEnter} 
                onMouseLeave = {handleMouseLeave}
             />)}
      </div>
    </div>
  );
};

export default HomeHeader;
