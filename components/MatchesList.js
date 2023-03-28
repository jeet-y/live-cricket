import Matche from "./Match";

const MatchesList = () => {
    return (
        <div className="container marginT">
            <div className="matcheListContainer">
                <div className="bold font-md margin10">Top Events</div>
                <div className="hr-line"></div>
                <Matche />
            </div>
        </div>
    )
}

export default MatchesList;