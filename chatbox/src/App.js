import './App.css';
import { useState, useRef } from "react";

function App() {
  const messageEnd = useRef(null);
  const [ans, setAns] = useState([]);
  const [addAsk, setAsk] = useState("");

  const [typing, setTyping] = useState(false);

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

  const saveEnter = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
      <div className="apiApp">
        <ul className='chatContainer'>
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
                        ans.role === "Assistant" ? "chatCont" : "chatContUser"
                      }
                    >           
                    <p
                        className={
                          ans.role === "User"
                            ? "user chatStyle"
                            : "assistant chatStyle"
                        }
                      >
                        {ans.responsed}
                      </p>
                    </div>
                  </div>
                );
              })
            ) :(
              <p style={{ margin: "0 auto" }}>Hello  🙂</p>
            )}
            <div ref={messageEnd} />
          </div>
          </ul>
        <div className="addPost">
          <input
            type="text"
            value={addAsk}
            placeholder="Lets chat =]"
            onChange={(e) => setAsk(e.target.value)}
            onKeyDown={saveEnter}
          />
          <button
            className='sendBtn'
            onClick={handleAdd}
            disabled={!addAsk}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}