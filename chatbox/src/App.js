import './App.css';
import { useState, useRef,  } from "react";
import IntroPage from "./IntroPage";
import AuthPage from "./Authpage";






function App() {
  const messageEnd = useRef(null);
  const [ans, setAns] = useState([]);
  const [addAsk, setAsk] = useState("");
  const [typing, setTyping] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);

  
  const handleAdd = async () => {
    setTimeout(() => {
      setAns((preAns) => [
        {
          responsed: addAsk,
          role: "User",
        },
        ...preAns,
      ]);
    }, 250);

    setAsk("");

    setTimeout(() => {
      setTyping(true);
    }, 800);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1a9b0fb267msh6baa89733baea49p1b7dbfjsnab05e6fa9631",
        "X-RapidAPI-Host": "chatgpt-api7.p.rapidapi.com",
      },
      body: `{"query": "${addAsk}"}`,
    };

    await fetch("https://chatgpt-api7.p.rapidapi.com/ask", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.response);
        setAns((preAns) => [
          {
            responsed: response.response,
            role: "Assistant",
          },
          ...preAns,
        ]);
      })
      .catch((err) => console.error(err));

    setTyping(false);
  };

  const handleIntroDismiss = () => {
    setShowIntro(false);
  };


  const saveEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

 
  return (
    <>
      {showIntro ? (
        <IntroPage onDismiss={handleIntroDismiss} />
      ) : (
        <>
          {isAuthenticated ? (
            <div className="apiApp">
              <ul className="chatContainer">
                <div className="chatSec">
                  {typing && (
                    <div className="chat">
                      <div className="chatCont">
                        <div className="assistant typing">
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {ans.length > 0 ? (
                    ans.map((ans, index) => {
                      return (
                        <div className="chat" key={index}>
                          <div
                            className={
                              ans.role === "Assistant"
                                ? "chatCont"
                                : "chatContUser"
                            }
                          >
                            <span
                              className={
                                ans.role === "User"
                                  ? "user chatStyle"
                                  : "assistant chatStyle"
                              }
                            >
                              {ans.responsed}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ margin: "0 auto" }}>
                      <strong>"Ask me anything!"</strong>
                      <br />
                      <strong>"What would you like to know about?"</strong>
                      <br />
                      <strong>
                        "I can help with a variety of topics - try asking
                        about science, history, or literature."
                      </strong>
                      <br />
                      <strong>
                        "Do you need help with a specific problem or
                        situation?"
                      </strong>
                      <br />
                      <strong>
                        "Tell me about your day - I'm here to chat!"
                      </strong>
                      <br />
                      <strong>
                        "I can also recommend books, movies, or TV shows -
                        want a suggestion?"
                      </strong>
                      <br />
                      <strong>
                        "Curious about a particular topic? Ask me and I'll do
                        my best to answer!"
                      </strong>
                      <br />
                      <strong>
                        "Need some advice or just want to vent? I'm here to
                        listen."
                      </strong>
                      <br />
                      <strong>
                        "Let's have a conversation! What's on your mind?"
                      </strong>
                      <br />
                      <strong>
                        "I can also tell jokes or fun facts - want to hear
                        one?"
                      </strong>
                    </p>
                  )}
                  <div ref={messageEnd} />
                </div>
              </ul>
              <div className="addPost">
                <input
                  type="text"
                  value={addAsk}
                  placeholder="Lets chat :)"
                  onChange={(e) => setAsk(e.target.value)}
                  onKeyDown={saveEnter}
                />
                <button
                  className="sendBtn"
                  onClick={handleAdd}
                  disabled={!addAsk}
                >
                  Send
                </button>
              </div>
            </div>
          ) : (
            <AuthPage onAuthentication={setAuthenticated} />
          )}
        </>
      )}
    </>
  );
  
  
}

export default App;