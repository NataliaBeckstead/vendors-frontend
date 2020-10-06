import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png";

function LandingPage() {

  return (
    <div className="landing-container">
        <img src={logo} alt="Harmons logo" />
        <p>Thank you for your interest in getting your product considered to be authorized in our stores.</p>
        <Link className="link" to={`/signin`}><button  className="submit" >Sign in</button></Link>
    </div>
  )
}

export default LandingPage;