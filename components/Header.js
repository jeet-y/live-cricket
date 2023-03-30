import React from "react";
import user from '../images/user-icon.png'

const Header = () => {
    return (
        <header className="flex flexHCenter">
            <div className="container flex flexHSpaceAround">
                <div className="logo">CRICKET LIVE APP</div>
                <div className="menu flex flexHSpaceBetween">
                    <div className="font-xl">Live Scores</div>
                    <img className="userIcon" src={user} alt="user icon" />
                </div>
            </div>
        </header>
    )
}

export default Header;