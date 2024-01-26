import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Container/HomeScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Container/Login";
import { auth } from "./firebase.js";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice.js";
import { useSelector } from "react-redux";
import Profile from "./Container/Profile.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
