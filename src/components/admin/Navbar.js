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
            <div>
                <Link className="link" to={`/manage_submissions`}>Submissions</Link>
                <Link className="link" to={`/manage_promotions`}>Promotions</Link>
                <Link className="link" to={`/manage_users`}>Users</Link>
                <Link className="link" to={`/change_profile`}>Profile</Link>
            </div>
            <button onClick={handSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar;