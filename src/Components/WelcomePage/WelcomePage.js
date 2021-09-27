import React, { useContext } from "react";
import { useHistory } from "react-router";
import "./WelcomePage.css";
import data from "../../assets/data.js";
import { Context } from "../../context/langContext";

export default function WelcomePage() {
  const redirect = useHistory();
  const { lang } = useContext(Context);

  const enterSite = () => {
    const container = document.querySelector(".welcome-container");
    container.classList.add("fade");
    setTimeout(() => {
      redirect.push("/auth");
    }, 300);
  };

  return (
    <div className="welcome-container">
      <h1>{data[lang].title}</h1>
      <button onClick={enterSite} className="btn-sign">
        {data[lang].enter}
      </button>
    </div>
  );
}
