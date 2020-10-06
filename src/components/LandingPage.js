import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";

function LandingPage() {

  return (
    <div>
        <img src={logo} alt="Harmons logo" />
        <p>Thank you for your interest in getting your product(s) considered to be authorized in our stores.</p>
        <Link to={`/signin`}>Sign in</Link>
    </div>
  )
}

export default LandingPage;