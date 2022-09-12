import React from "react";

function PrayForSomeone(props) {
    let prayContent = 
        <div id="top">
            <h1 id="top1">Pray For Someone</h1>
            <button id="prayerButton">Random Prayer</button>
        </div>;
    if (props.page !== 'prayForSomeone') {
        prayContent = "";
    }
    return (
        <div class="prayForSomeone">
            {prayContent}
        </div>
    );
}

export default PrayForSomeone;