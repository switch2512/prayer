import React from "react";

function RequestPrayer(props) {
    let requestContent = 
        <div id="bottom">
            <h1 id="bottom1">Request Prayer</h1>
            <form id="requestForm">
                <textarea wrap="soft" rows="14" cols="30" type="text" placeholder="Type Prayer Here"/>
                <input type="submit" />
            </form>
        </div>;
    if (props.page !== 'requestPrayer') {
        requestContent = "";
    }
  return (
    <div class="requestPrayer">
        {requestContent}
    </div>
  );
}

export default RequestPrayer;
