// Importing useState and useEffect hooks from React library
import { useState, useEffect } from "react";

// Login function which handles the form submission
function Login() {
  // Setting up username and password states using useState hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // Setting up error states for username and password using useState hook
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");