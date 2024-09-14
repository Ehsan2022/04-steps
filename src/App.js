/** @format */

import { useState } from "react";

const roadmapMessages = [
  "Learn HTML 🤔",
  "Learn CSS 😊",
  "Learn Bootstrap, Tailwind ... 😀",
  "Learn Javascript 😃",
  "Learn React, Vue.js ... 😉",
  "Learn Git and Github 😎",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [clickButton, setClickButton] = useState("Close Modal");

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handleNext() {
    if (step < roadmapMessages.length) {
      setStep((s) => s + 1);
    }
  }
  function handleOpen() {
    setIsOpen((is) => !is);
    setClickButton(
      isOpen ? "Click to see yor front-end journy roadmap" : "Close"
    );
  }
  return (
    <>
      <button className="close" onClick={handleOpen}>
        {clickButton}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : "deactive"}>1</div>
            <div className={step >= 2 ? "active" : "deactive"}>2</div>
            <div className={step >= 3 ? "active" : "deactive"}>3</div>
            <div className={step >= 4 ? "active" : "deactive"}>4</div>
            <div className={step >= 5 ? "active" : "deactive"}>5</div>
            <div className={step >= 6 ? "active" : "deactive"}>6</div>
            <div className={step >= 7 ? "active" : "deactive"}>7</div>
            <div className={step >= 8 ? "active" : "deactive"}>8</div>
          </div>
          <p className="message">
            Step {step} : {roadmapMessages[step - 1]}
          </p>
          <div className="buttons">
            <Button classText="previousButton" onClick={handlePrevious}>
              {"<"}
            </Button>
            <Button classText="nextButton" onClick={handleNext}>
              {">"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, classText, children }) {
  return (
    <button className={classText} onClick={onClick}>
      {children}
    </button>
  );
}
