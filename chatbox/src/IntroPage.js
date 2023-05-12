import React from "react";
import "./IntroPage.css";

function IntroPage({ onDismiss }) {
  const handleImageClick = () => {
    onDismiss();
  };

  return (
    <div className="introPage">
      <img
        src="https://i.ibb.co/tx5Ctbb/1698535.png"
        alt="Chatbot"
        className="chatbot-image"
        onClick={handleImageClick}
      />

      <h1>
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h1>
      <p>When you're ready, click robot   to begin</p>
     
    </div>
  );
}

export default IntroPage;
