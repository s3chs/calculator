import React, { useContext, useRef, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import data from "../../assets/data.js";
import { Context } from "../../context/langContext";
import { useSelector, useDispatch } from "react-redux";
import "./AuthForm.css";

export default function SignUp() {
  const showAuth = useSelector((state) => state);
  const dispatch = useDispatch();
  const { lang } = useContext(Context);
  const [error, setError] = useState("");
  const history = useHistory();
  const { signUp } = useContext(AuthContext);

  const inputs = useRef([]);

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signUp(inputs.current[0].value, inputs.current[1].value);
      dispatch({
        type: "TOGGLEAUTH",
      });
    } catch {
      setError(data[lang].errorSignUp);
    }
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>{data[lang].signUp}</h2>
        <div className="form-group">
          <label htmlFor="mail">{data[lang].mail}</label>
          <input
            type="email"
            ref={addInputs}
            htmlFor="email"
            required
            autoComplete="off"
            placeholder={data[lang].mailPlaceholder}
          />
        </div>
        <div className="form-group">
          <label htmlFor="psw">{data[lang].psw}</label>
          <input
            type="password"
            ref={addInputs}
            id="psw"
            required
            autoComplete="off"
            placeholder={data[lang].pswPlaceholder}
          />
        </div>
        <div className="error">{error}</div>
        <button className="btn-sign">{data[lang].signUpBtn}</button>
      </form>
    </div>
  );
}
