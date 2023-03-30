import React from "react";

const Match = ({ teams, sub_title, status, venue, winner, start_at }) => {
    let city = venue.city;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const myDate = new Date(start_at * 1000);
    return (
        <div className="matchContainer">
            <div className="upperCase bold marginTB-8 font-sm font-color-blackOlive">Result</div>
            <div className="font-color-gray font-sm margin-t2">{sub_title}, {city}, {months[myDate.getMonth()]} {myDate.getDate()}, {myDate.getFullYear()},
                {/* <u className="font-color-blackOlive font-sm"> Ireland tour of Bangladesh</u> */}
            </div>
            <div className="flex flexHSpaceBetween bold font-xl marginTB-10">
                <div>{teams.a.code}</div>
                {/* <div>(19.2/19 ov) 207/5</div> */}
            </div>
            <div className="flex font-xl bold flexHSpaceBetween marginTB-10">
                <div>{teams.b.code}</div>
                {/* <div>(8/8 ov, T:208) 81/5</div> */}
            </div>

            <div className="font-md lighter">{(winner === 'a') ? teams.a.name : teams.b.name} won.</div>
            <div className="hr-line"></div>
            <div className="font-md bold">Series Home</div>
        </div >
    )
}

export default Match;