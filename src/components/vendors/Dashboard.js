import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div className="dashboard">
        <Navbar />
        <h2>Welcome, username!</h2>
        <div className="options">
          <Link className="link option" to={`/submit_item`}><div>Submit new item(s)</div></Link>
          <div className="option">
            <Link className="link option" to={`/submit_promotion`}>Submit promotion</Link>
            <Link className="link option" to={`/merchandising_menu`}>Merchandising & display menu</Link>
          </div>
          <div className="option">
            <Link className="link option" to={`/item_submissions`}>See items submissions</Link>
            <Link className="link option" to={`/promotion_submissions`}>See promotion submissions</Link>
          </div>
          <Link className="link option" to={`/profile`}><div>Profile</div></Link>
        </div>
    </div>
  )
}

export default Dashboard;