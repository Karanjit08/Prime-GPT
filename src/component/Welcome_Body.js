var WelcomeBody = () => {
  return (
    <div className="welcome-body">
      <div className="welcome-body-info">
        <div className="body-info-logo">
          <img
            src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
            alt="body-logo-1"
          ></img>
        </div>
        <div className="body-info-message">
          <h1>Welcome to Prime Video</h1>
          <h3>
            Join Prime to watch the latest movies, TV shows and award-winning
            Amazon Originals
          </h3>
          <button className="sign-in-btn">Sign in to join Prime</button>
        </div>
      </div>
      <div className="welcome-body-info">
        <div className="body-info-logo">
          <img
            src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Right.jpg"
            alt="body-logo-2"
          ></img>
        </div>
        <div className="body-info-message">
          <h1>Movie rentals on Prime Video</h1>
          <h3>
          Early Access to new movies, before digital subscription
          </h3>
          <button className="rent-btn">Rent now</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBody;
