import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {

    let history = useHistory();
    const [submIsOpen, setSubmIsOpen] = useState(false);
    const [promIsOpen, setPromIsIsOpen] = useState(false);

    function handSignOut() {
        history.push("/signin");
    }

    return (
        <div className="navbar">
            <Link to={`/admin_dashboard`}><img src={logo} alt="Harmons logo" /></Link>
            <nav>
                <ul>
                    <li>
                        <p className="link" onClick={() => {setSubmIsOpen(!submIsOpen)}}>Submissions {submIsOpen ? "▴" : "▾"}</p>
                        <ul className={submIsOpen ? "nav-open" : "nav-closed"}>
                            <li><Link className="link" to={`/review_submissions`}>Review new submissions</Link></li>
                            <li><Link className="link" to={`/see_all_submissions`}>See all submissions</Link></li>
                            <li><Link className="link" to={`/download_submissions`}>Download submissions</Link></li>
                        </ul>
                    </li>
                    <li>
                        <p className="link" onClick={() => {setPromIsIsOpen(!promIsOpen)}}>Promotions {promIsOpen ? "▴" : "▾"}</p>
                        <ul className={promIsOpen ? "nav-open" : "nav-closed"}>
                            <li><Link className="link" to={`/review_promotions`}>Review new promotions</Link></li>
                            <li><Link className="link" to={`/see_all_promotions`}>See all promotions</Link></li>
                            <li><Link className="link" to={`/download_promotions`}>Download promotions</Link></li>
                        </ul>
                    </li>
                    <li><Link className="link" to={`/manage_users`}>Users</Link></li>
                    <li><Link className="link" to={`/change_profile`}>Profile</Link></li>
                </ul>
            </nav>
            <button onClick={handSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar;