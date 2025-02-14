import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";


var WelcomeFooter = () => {

    const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux


    return (
        <div className="welcome-footer">
        <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="footer-logo"></img>
        <div className="terms-condition">
        <p>{lang[selectedLanguage].termsPrivacyText}</p>
        <p>{lang[selectedLanguage].feedbackText}</p>
        <p>{lang[selectedLanguage].helpText}</p>
        </div>
        <div className="affiliate">
        {lang[selectedLanguage].affiliateText}
        </div>
        </div>
    );
}

export default WelcomeFooter