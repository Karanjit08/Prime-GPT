import "../App.css";
import React, { useState } from "react";

const Login = () => {

  var [isSignUp, setIsSignUp] = useState(false);

  var toggleForm = () =>{
    setIsSignUp(!isSignUp);
  }

  return (
    <div className="login-body">
      <div className="login-logo">
        <img src="https://m.media-amazon.com/images/G/01/digital/PV_Logo_Landscape_Smile_Centred_Dark_Squid_Ink_RGB_150._CB554671110_.png"></img>
      </div>
      {
        isSignUp ?
        <SignUpContainer /> : <SignInContainer />
      }
      <div className="new-to-amazon">
        <div className="divider"></div>
        <div className="divider-text">
          <h5>New to Amazon?</h5>
        </div>
        <div className="divider"></div>
      </div>
      <button className="sign-up-btn" onClick={toggleForm}>
        {isSignUp ? <h4>Sign In</h4> : <h4>Sign Up</h4> }
      </button>
      <div className="divider"></div>
      <div className="terms-condition-login">
        <p>Terms & Privacy Notice</p>
        <p>Send us feedback</p>
        <p>Help</p>
      </div>
      <div className="affiliate">
        © 1996-2025, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

var SignInContainer = () => {
  return (
    <div className="sign-in-container">
        <div className="sign-in-box">
          <div className="login-text">
            <h2>Sign In</h2>
          </div>
          <div className="login-form">
            <form>
              <label>Email or mobile phone number</label>
              <input type="text" className="input-box" />
              <label>Password</label>
              <input type="text" className="input-box" />
            </form>
          </div>
          <button className="continue-btn">
            <h4>Continue</h4>
          </button>
          <AggrementText />
        </div>
      </div>
  );
}

var SignUpContainer = () => {
  return (
    <div className="sign-in-container">
        <div className="sign-in-box">
          <div className="login-text">
            <h2>Sign Up</h2>
          </div>
          <div className="login-form">
            <form>
            <label>Name</label>
              <input type="text" className="input-box" />
              <label>Email or mobile phone number</label>
              <input type="text" className="input-box" />
              <label>Password</label>
              <input type="text" className="input-box" />
            </form>
          </div>
          <button className="continue-btn">
            <h4>Continue</h4>
          </button>
          <AggrementText />
        </div>
      </div>
  );
}

var AggrementText = () => {
  return (
    <p className="agreement-text">
      By continuing, you agree to the Amazon{" "}
      <span className="hover-link">Conditions of Use and Privacy Notice</span>
    </p>
  );
};
export default Login;
