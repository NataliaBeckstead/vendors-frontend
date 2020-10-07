import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {

    let history = useHistory();

    function handSignOut() {
        history.push("/signin");
    }

    return (
        <div className="navbar">
            <img src={logo} alt="Harmons logo" />
            <nav>
                <ul>
                    <li><Link className="link" to={`/submit_item`}>Submit item</Link></li>
                    <li><Link className="link" to={`/submit_promotion`}>Submit promotion</Link></li>
                    <li><Link className="link" to={`/submissions`}>See my submissions</Link></li>
                    <li><Link className="link" to={`/profile`}>Profile</Link></li>
                </ul>
            </nav>
            <button onClick={handSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar;