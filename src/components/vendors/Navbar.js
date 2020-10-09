import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {

    let history = useHistory();

    const [promIsOpen, setPromIsOpen] = useState(false);
    const [subIsOpen, setSubIsOpen] = useState(false);

    function handSignOut() {
        history.push("/signin");
    }

    return (
        <div className="navbar">
            <Link to={`/dashboard`}><img src={logo} alt="Harmons logo" /></Link>
            <nav>
                <ul>
                    <li><Link className="link" to={`/submit_item`}>Submit new item(s)</Link></li>
                    <li>
                        <p className="link" onClick={() => {setPromIsOpen(!promIsOpen); setSubIsOpen(false); }}>Promotions {promIsOpen ? "▴" : "▾"}</p>
                        <ul className={promIsOpen ? "nav-open" : "nav-closed"}>
                            <li><Link className="link" to={`/submit_promotion`}>Submit promotion</Link></li>
                            <li><Link className="link" to={`/merchandising_menu`}>Merchandising & display menu</Link></li>
                        </ul>
                    </li>
                    <li>
                        <p className="link" onClick={() => {setSubIsOpen(!subIsOpen); setPromIsOpen(false);}}>See my submissions {subIsOpen ? "▴" : "▾"}</p>
                        <ul className={subIsOpen ? "nav-open" : "nav-closed"}>
                            <li><Link className="link" to={`/item_submissions`}>Items</Link></li>
                            <li><Link className="link" to={`/promotion_submissions`}>Promotions</Link></li>
                        </ul>
                    </li>
                    <li><Link className="link" to={`/profile`}>Profile</Link></li>
                </ul>
            </nav>
            <button onClick={handSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar;