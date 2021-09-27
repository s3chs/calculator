import React, { useState, useEffect, useContext } from "react";
import "./Calculator.css";
import data from "../../assets/data.js";
import { Context } from "../../context/langContext";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";

export default function Calculator() {
  const dispatch = useDispatch();
  const { lang } = useContext(Context);

  // Calculator state //
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setAuth();
    setTimeout(() => {
      const container = document.querySelector(".section-container");
      container.classList.add("fade-in");
    }, 300);

    setInput("0");
  }, []);

  const setAuth = () => {
    dispatch({
      type: "FORCEAUTH"
    })
  }

  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }

    let calc;
    switch (operator) {
      case "/":
        calc = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        calc = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "-":
        calc = String(parseFloat(preState) - parseFloat(curState));
        break;
      case "X":
        calc = String(parseFloat(preState) * parseFloat(curState));
        break;

      default:
        return;
    }
    // EASTER EGG //
    if (calc === "666") {
      window.open("https://youtu.be/WxnN05vOuSM?t=110");
    }
    //     //     //
    setInput("");
    setPreState(calc);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };

  const darkMode = () => {
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    const screen = document.querySelector(".screen");
    const lightGray = document.querySelectorAll(".light-gray");
    const orange = document.querySelectorAll(".orange");
    const btnDark = document.querySelector(".dark-mode");

    body.classList.toggle("dark");
    screen.classList.toggle("dark-screen");
    container.classList.toggle("white");
    btnDark.classList.toggle("activated");

    lightGray.forEach((el) => {
      el.classList.toggle("activated");
    });

    orange.forEach((el) => {
      el.classList.toggle("reverse-orange");
    });
  };

  return (
    <div className="section-container">
      <button onClick={darkMode} className="dark-mode">
        {data[lang].darkMode}
      </button>
      <div className="container">
        <div className="wrapper">
          <div className="screen">
            {input !== "" || input === "0" ? (
              <NumberFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
              />
            ) : (
              <NumberFormat
                value={preState}
                displayType={"text"}
                thousandSeparator={true}
              />
            )}
          </div>
          <div onClick={reset} className="btn light-gray">
            AC
          </div>
          <div onClick={percent} className="btn light-gray">
            %
          </div>
          <div onClick={minusPlus} className="btn light-gray">
            +/-
          </div>
          <div onClick={operatorType} className="btn orange">
            /
          </div>
          <div onClick={inputNum} className="btn">
            7
          </div>
          <div onClick={inputNum} className="btn">
            8
          </div>
          <div onClick={inputNum} className="btn">
            9
          </div>
          <div onClick={operatorType} className="btn orange">
            X
          </div>
          <div onClick={inputNum} className="btn">
            4
          </div>
          <div onClick={inputNum} className="btn">
            5
          </div>
          <div onClick={inputNum} className="btn">
            6
          </div>
          <div onClick={operatorType} className="btn orange">
            +
          </div>
          <div onClick={inputNum} className="btn">
            1
          </div>
          <div onClick={inputNum} className="btn">
            2
          </div>
          <div onClick={inputNum} className="btn">
            3
          </div>
          <div onClick={operatorType} className="btn orange">
            -
          </div>
          <div onClick={inputNum} className="btn zero">
            0
          </div>
          <div onClick={inputNum} className="btn">
            .
          </div>
          <div onClick={equals} className="btn">
            =
          </div>
        </div>
      </div>
    </div>
  );
}
