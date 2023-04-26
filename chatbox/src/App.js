import './App.css';
import { useState, useRef } from "react";

function App() {
  const messageEnd = useRef(null);
  const [ans, setAns] = useState([]);
  const [addAsk, setAsk] = useState("");

  const [typing, setTyping] = useState(false);