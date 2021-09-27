import React, { useContext, useEffect } from "react";
import "./Home.css";
import SignIn from "../AuthForm/SignIn";
import SignUp from "../AuthForm/SignUp";
import data from "../../assets/data.js";
import { Context } from "../../context/langContext";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function Home() {
  const { lang } = useContext(Context);
  const redirect = useHistory();

  const showAuth = useSelector((state) => state);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.remove("dark");

    setTimeout(() => {
      const container = document.querySelector(".global-container");
      container.classList.add("fade-in");
    }, 300);
  }, []);

  useEffect(() => {
    if (showAuth?.showAuth === false) {
      const container = document.querySelector(".global-container");
      container.classList.remove("fade-in");
      setTimeout(() => {
        redirect.push("/calculator");
      }, 300);
    }
  }, [showAuth]);

  return (
    <div className="global-container">
      <div className="title">
        <p>{data[lang].auth}</p>
      </div>
      <div className="auth-section">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}
