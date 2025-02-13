import lang from "../utils/LanguageConstants";


var WelcomeFooter = () => {
    return (
        <div className="welcome-footer">
        <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="footer-logo"></img>
        <div className="terms-condition">
        <p>{lang.hindi.termsPrivacyText}</p>
        <p>{lang.hindi.feedbackText}</p>
        <p>{lang.hindi.helpText}</p>
        </div>
        <div className="affiliate">
        {lang.hindi.affiliateText}
        </div>
        </div>
    );
}

export default WelcomeFooter