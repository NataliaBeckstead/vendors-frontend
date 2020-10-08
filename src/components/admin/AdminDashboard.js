import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AdminDashboard() {

  return (
    <div className="dashboard">
      <Navbar />
        <h2>Welcome, Luke!</h2>
        <div className="options">
          <div className="option">
            <Link className="link option" to={`/review_submissions`}>Review new submissions</Link>
            <Link className="link option" to={`/see_all_submissions`}>See all submissions</Link>
            <Link className="link option" to={`/download_submissions`}>Download submissions</Link>
          </div>
          <div className="option">
            <Link className="link option" to={`/review_promotions`}>Review new promotions</Link>
            <Link className="link option" to={`/see_all_promotions`}>See all promotions</Link>
            <Link className="link option" to={`/download_promotions`}>Download promotions</Link>
          </div>
          <Link className="link option" to={`/manage_users`}><div>Manage Users</div></Link>
          <Link className="link option" to={`/change_profile`}><div>Change profile</div></Link>
        </div>
    </div>
  )
  
}

export default AdminDashboard;