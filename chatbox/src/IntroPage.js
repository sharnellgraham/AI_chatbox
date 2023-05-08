import React from "react";
import "./IntroPage.css";

function IntroPage({ onDismiss }) {
    return (
      <div className="introPage">
        <h1>Welcome to ChatBot</h1>
       
        <button onClick={onDismiss}>Close</button>
      </div>
    );
  }
  

export default IntroPage;
