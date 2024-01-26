import React, { useState } from "react";
import "../styles/loginScreen.css";
import SignInScreen from "../Components/SignInScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="loginScreen__logo"
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradiant" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              {" "}
              <h1>Enjoy big movies, hit series and more from ₹149.</h1>
              <p className="title__1">Join today. Cancel anytime.</p>
              <p className="title__2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}>
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
