import React from "react";
import "./IntroPage.css";

function IntroPage({ onDismiss }) {
    return (
      <div className="introPage">
        <img src="https://i.ibb.co/tx5Ctbb/1698535.png" alt="Chatbot" class="chatbot-image" />

        <h1><span>W</span><span>E</span><span>L</span><span>C</span><span>O</span><span>M</span><span>E</span></h1>
        <p> When you're ready, simply hit the "Close" button below to begin</p>
        <button onClick={onDismiss}>Close</button>
      </div>
    );
}

export default IntroPage;
