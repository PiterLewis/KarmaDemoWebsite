import React, { useState } from "react";
import "./QuestionFlashCard.css";

const QuestionFlashCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped(!flipped);

  return (
    <div className="flashcard" onClick={toggleFlip}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <h2>{title}</h2>
        </div>
        <div className="flashcard-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionFlashCard;
