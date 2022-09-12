import React from "react";

function Home(props) {
  let homeContent =     
    <div className="home">
      <div id="top" onClick={props.handlePrayForSomeone}>
        <h1>Pray For Someone</h1>
      </div>
      <div id="bottom" onClick={props.handleRequestPrayer}>
        <h1>Request Prayer</h1>
      </div>
    </div>;

  if (props.page !== 'home') {
      homeContent = "";
  }
  return (
    <div>
      {homeContent}
    </div>
  );
}

export default Home;
