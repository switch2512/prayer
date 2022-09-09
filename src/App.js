import React, { useState, useEffect } from "react";
import Home from "./Components/home.js";
import prayForSomeone from "./Components/prayForSomeone.js";
import requestPrayer from "./Components/requestPrayer.js";
import ReactDom from 'react-dom/client';

function App() {
  const [displays, setDisplays] = useState('home')

  const handleHome = () => {
    
  }


  return (
    <div className="App">
      <Home />
      <prayForSomeone />
      <requestPrayer />
    </div>
  );
}

export default App;
