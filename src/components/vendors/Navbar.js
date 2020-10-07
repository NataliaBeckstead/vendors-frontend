import React from "react";
import {Link} from "react-router-dom";

function Navbar() {

  return (
    <div>
        <div>
            <Link className="link" to={`/submit_item`}>Submit item</Link>
            <Link className="link" to={`/submit_promotion`}>Submit promotion</Link>
            <Link className="link" to={`/submissions`}>See my submissions</Link>
            <Link className="link" to={`/profile`}>Manage profile</Link>
        </div>
        <button>Sign out</button>
    </div>
  )
}

export default Navbar;