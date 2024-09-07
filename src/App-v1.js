import { useState } from "react";

const messages = [
  "Learn React ⚛️",
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
    if (step < messages.length) {
      setStep((s) => s + 1);
    }
  }
  function handleOpen() {
    setIsOpen((is) => !is);
    setClickButton(isOpen ? "Open Modal" : "Close Modal");
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
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button className="previousButton" onClick={handlePrevious}>
              {"<"}
            </button>
            <button className="nextButton" onClick={handleNext}>
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
