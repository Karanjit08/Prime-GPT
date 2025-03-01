import "../App.css";
import React, { useRef, useState } from "react";
import { validateSignInData, validateSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import lang from "../utils/LanguageConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash,faEye} from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux

  var [isSignUp, setIsSignUp] = useState(false);

  var toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="login-body">
      <div className="login-logo">
        <img src="https://m.media-amazon.com/images/G/01/digital/PV_Logo_Landscape_Smile_Centred_Dark_Squid_Ink_RGB_150._CB554671110_.png"></img>
      </div>
      {isSignUp ? <SignUpContainer /> : <SignInContainer />}
      <div className="new-to-amazon">
        <div className="divider"></div>
        <div className="divider-text">
          <h5>{lang[selectedLanguage].newToAmazon}</h5>
        </div>
        <div className="divider"></div>
      </div>
      <button className="sign-up-btn" onClick={toggleForm}>
        {isSignUp ? <h4>{lang[selectedLanguage].signIn}</h4> : <h4>{lang[selectedLanguage].signUp}</h4>}
      </button>
      <div className="divider"></div>
      <div className="terms-condition-login">
        <p>{lang[selectedLanguage].termsPrivacyText}</p>
        <p>{lang[selectedLanguage].feedbackText}</p>
        <p>{lang[selectedLanguage].helpText}</p>
      </div>
      <div className="affiliate">
        © 1996-2025, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

var SignInContainer = () => {

  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux
  var navigator = useNavigate();
  let [errorMessage, setErrorMessage] = useState(null);
  let email = useRef();
  let password = useRef();
  let submitData = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    var message = validateSignInData(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);

    if (message === null) {
      // SIGN IN LOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigator("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    return;
  };

  // password hide/show 
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <div className="login-text">
          <h2>{lang[selectedLanguage].signIn}</h2>
        </div>
        <div className="login-form">
          <form>
            <label>{lang[selectedLanguage].emailId}</label>
            <input ref={email} type="text" className="input-box" />
            <label>{lang[selectedLanguage].password}</label>
            <div className="password-container">
            <input ref={password}    type={showPassword ? "text" : "password"}  className="input-box" />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </span>
            </div>
          </form>
        </div>
        <b className="error-text">{errorMessage}</b>
        <button className="continue-btn" onClick={submitData}>
          <h4>{lang[selectedLanguage].continue}</h4>
        </button>
        <AggrementText />
      </div>
    </div>
  );
};

var SignUpContainer = () => {
  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux
  var navigator = useNavigate();

  let [errorSignUpMessage, setErrorSignUpMessage] = useState(null);
  let emailSignUp = useRef();
  let passwordSignUp = useRef();
  let nameSigUp = useRef();
  let submitSignUpData = () => {
    console.log(emailSignUp.current.value);
    console.log(passwordSignUp.current.value);
    console.log(nameSigUp.current.value);

    var message = validateSignUpData(
      emailSignUp.current.value,
      passwordSignUp.current.value,
      nameSigUp.current.value
    );
    console.log(message);
    setErrorSignUpMessage(message);

    if (message === null) {
      //  SIGN UP LOGIC
      createUserWithEmailAndPassword(
        auth,
        emailSignUp.current.value,
        passwordSignUp.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigator("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorSignUpMessage(errorCode + "-" + errorMessage);
        });
    }
    return;
  };

  // password hide/show 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <div className="login-text">
          <h2>{lang[selectedLanguage].signUp}</h2>
        </div>
        <div className="login-form">
          <form>
            <label>{lang[selectedLanguage].name}</label>
            <input ref={nameSigUp} type="text" className="input-box" />
            <label>{lang[selectedLanguage].emailId}</label>
            <input ref={emailSignUp} type="text" className="input-box" />
            <label>{lang[selectedLanguage].password}</label>
            <div className="password-container">
            <input ref={passwordSignUp}    type={showPassword ? "text" : "password"}  className="input-box" />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </span>
            </div>
          </form>
        </div>
        <b className="error-text">{errorSignUpMessage}</b>
        <button className="continue-btn" onClick={submitSignUpData}>
          <h4>{lang[selectedLanguage].continue}</h4>
        </button>
        <AggrementText />
      </div>
    </div>
  );
};

var AggrementText = () => {
  const selectedLanguage = useSelector((state) => state.language.languageConfig); // Get language from Redux
  return (
    <p className="agreement-text">
      {lang[selectedLanguage].aggrementText}{" "}
      <span className="hover-link">{lang[selectedLanguage].aggrementCondition}</span>
    </p>
  );
};
export default Login;
