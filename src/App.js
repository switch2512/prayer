import React, { useState, useEffect } from "react";
import Home from "./Components/home.js";
import PrayForSomeone from "./Components/prayForSomeone";
import RequestPrayer from "./Components/requestPrayer";

function App() {
  const [page, setPage] = useState("home")

  const handlePrayForSomeone = () => {
    document.getElementById("bottom").style.height = "0vh";
    document.getElementById("top").style.height = "100vh";
    setTimeout(function() {
      setPage("prayForSomeone");
      setTimeout(function() {
        document.getElementById("top1").style.top = "5%";
        setTimeout(function() {
        document.getElementById("prayerButton").style.display = "block";
        }, 500)
      }, 1)
    }, 1500)
  }
  const handleRequestPrayer = () => {
    document.getElementById("bottom").style.height = "100vh";
    document.getElementById("top").style.height = "0vh";
    setTimeout(function() {
      setPage("requestPrayer");
      setTimeout(function() {
        document.getElementById("bottom1").style.top = "5%";
        setTimeout(function() {
          document.getElementById("requestForm").style.display = "block";
          }, 500)
      }, 1)
    }, 1500)
  }

  return (
    <div className="App">
      <Home page={page} handlePrayForSomeone={handlePrayForSomeone} handleRequestPrayer={handleRequestPrayer} />
      <PrayForSomeone page={page} />
      <RequestPrayer page={page} />
    </div>
  );
}

export default App;
