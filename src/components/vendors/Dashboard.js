import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div className="dashboard">
        <Navbar />
        <h2>Welcome, username!</h2>
        <div className="options">
          <Link className="link option" to={`/submit_item`}><div>Submit item</div></Link>
          <Link className="link option" to={`/submit_promotion`}><div>Submit promotion</div></Link>
          <Link className="link option" to={`/submissions`}><div>See my submissions</div></Link>
          <Link className="link option" to={`/profile`}><div>Profile</div></Link>
        </div>
    </div>
  )
}

export default Dashboard;