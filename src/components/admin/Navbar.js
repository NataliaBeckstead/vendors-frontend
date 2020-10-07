import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {

    let history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    function handSignOut() {
        history.push("/signin");
    }

    return (
        <div className="navbar">
            <img src={logo} alt="Harmons logo" />
            <nav>
                <ul>
                    <li>
                        <p className="link" onClick={() => {setIsOpen(!isOpen)}}>Submissions</p>
                        <ul className={isOpen ? "nav-open" : "nav-closed"}>
                            <li><Link className="link" to={`/review_submissions`}>Review new submissions</Link></li>
                            <li><Link className="link" to={`/see_all_submissions`}>See all submissions</Link></li>
                            <li><Link className="link" to={`/download_submissions`}>Download submissions</Link></li>
                        </ul>
                    </li>
                    <li><Link className="link" to={`/manage_promotions`}>Promotions</Link></li>
                    <li><Link className="link" to={`/manage_users`}>Users</Link></li>
                    <li><Link className="link" to={`/change_profile`}>Profile</Link></li>
                </ul>
            </nav>
            <button onClick={handSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar;