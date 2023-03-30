import { useEffect, useState } from "react";
import { GET_BALL_BY_BALL_DETAILS } from "../constant";

const MatchDetails = () => {
    let [matchDetail, setMatchDetail] = useState([]);
    async function getTournaments() {
        try {
            let response = await fetch(GET_TOKEN_URL, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: 'POST',
            })
            let json = await response.json();
            return json;
        }
        catch (error) {
            return error;
        }
    }

    useEffect(() => {
        let response = getTournaments();
        response.then((list) => {
            // setMatchDetail(list.data.matches)
        })
    }, []);

    return (
        (!matchDetail) ? <h3>Not Found!</h3> :
            <div className="container margin-t1" >
                <div className="width-75">
                    <div className="matchListHeading">
                        <p className="bold font-xl margin-ol1">Top Events</p>
                    </div>
                    <div className="matcheListContainer">
                        {
                            // matchList.map(match => console.log(match))
                        }
                    </div>
                </div>
            </div>
    )
}


export default MatchDetails;