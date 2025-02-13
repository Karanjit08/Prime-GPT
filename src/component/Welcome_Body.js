import { Link } from "react-router-dom";
import lang from "../utils/LanguageConstants";

var WelcomeBody = () => {


  var channelLogoArr = [
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1._AC_SX400_QL80_FP_.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294._AC_SX400_QL80_FP_.png",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Anime._AC_SX400_QL80_FP_.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_BBC_PLAYER._AC_SX400_QL80_FP_.png",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Chaupal._AC_SX400_QL80_FP_.png",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery._AC_SX400_QL80_FP_.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX._AC_SX400_QL80_FP_.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MGMPLUS._AC_SX400_QL80_FP_.png",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1._AC_SX400_QL80_FP_.jpg"
  ];

  return (
    <div className="welcome-body">
    <WelcomeSection 
      imageUrl = "https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
      title = {lang.hindi.welcomeToPrime}
      subTitle = {lang.hindi.joinPrimeMessage}
            btnName = {lang.hindi.signInbtn}
    />
    <WelcomeSection 
      imageUrl="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg"
      title= {lang.hindi.movieRentalsMessage}
      subTitle= {lang.hindi.earlyAccess}
      btnName={lang.hindi.rentNow}
    />
      <div className="welcome-body-channels">
      <div className="channel-message">
        <div className="channel-message-title">
        <h1>{lang.hindi.favSubscriptionSubTitleMessage}</h1>
        </div>
        <div className="channel-message-sub-title">
        <h3>
        {lang.hindi.favSubscriptionSubTitleMessage}
        </h3>
        </div>
      </div>
      <div className="channel-logo">
        {
          channelLogoArr.map((imageUrl,index) => {
            return <div className="c-logo" key={index}>
              <img src={imageUrl} alt="logo"></img>
            </div>
          })
        }
      </div>
      </div>
    </div>
  );
};

var WelcomeSection = ({imageUrl,title,subTitle,btnName}) => {
  return (
    <div className="welcome-body-info">
    <div className="body-info-logo">
      <img
        src={imageUrl}
        alt="body-logo"
      ></img>
    </div>
    <div className="body-info-message">
      <h1>{title}</h1>
      <h3>
        {subTitle}
      </h3>
      <button className="sign-in-btn"><Link to={"/login"} className="join-prime-link-body">{btnName}</Link></button>
    </div>
  </div>
  );
  
}

export default WelcomeBody;
