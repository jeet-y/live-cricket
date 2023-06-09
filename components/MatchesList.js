import { useEffect, useState } from "react";
import Matche from "./Match";
import { GET_TOURNAMENT_FIXTURES } from "../constant";
import useToken from '../utility/useToken'

const MatchesList = () => {
    let api_token = 'API_TOKEN=' + useToken();
    let [matchList, setMatchList] = useState([]);

    async function getTournaments() {
        try {
            let response = await fetch(GET_TOURNAMENT_FIXTURES, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                method: 'POST',
                body: api_token
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
            setMatchList(list.data.matches)
        })
    }, []);

    return (
        (!matchList) ? <h3>Not Found!</h3> :
            <div className="container margin-t1" >
                <div className="width-75">
                    <div className="matchListHeading">
                        <p className="bold font-xl margin-ol1">Top Events</p>
                    </div>
                    <div className="matcheListContainer">
                        {
                            matchList.map(match => <Matche {...match} />)
                        }
                    </div>
                </div>
            </div>
    )
}

export default MatchesList;