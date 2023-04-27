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