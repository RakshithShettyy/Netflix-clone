import React, { useRef } from "react";
import "../styles/signinScreen.css";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        // Handle successful sign-in
        console.log(authUser);
        // You might want to redirect the user or change the UI state here
      })
      .catch((error) => {
        // Handle errors such as incorrect password or no user found
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          {" "}
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray ">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            {" "}
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
