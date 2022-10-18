import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import {useState} from "react";
import StoreFront from "./StoreFront.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn === true) {
      return (
          <>
              <StoreFront />
              <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
          </>
      )
  } else { 
      return (
          <>
              <h2>Please login</h2>
              <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
          </>
      )
    };
};

createRoot(document.querySelector("#react-root")).render(<App />);
