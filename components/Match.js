import React from "react";

const Match = () => {
    return (
        <div className="margin10 matchContainer">
            <div className="upperCase font-sm bold">Result</div>
            <div className="font-sm font-lightGray margin-T5">1st T20I, Chattogram, March 27, 2023,
                <u className="font-sm">Ireland tour of Bangladesh</u></div>
            <div className="flex flexHSpaceBetween margin-T5">
                <div>Bangladesh</div>
                <div>(19.2/19 ov) 207/5</div>
            </div>
            <div className="flex flexHSpaceBetween">
                <div>Ireland</div>
                <div>(8/8 ov, T:208) 81/5</div>
            </div>

            <div className="font-md">Bangladesh won by 22 runs (DLS method)</div>
            <div className="hr-line"></div>
            <div className="font-md">Series Home</div>
        </div >
    )
}

export default Match;