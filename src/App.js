import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";

import LandingPage from './components/LandingPage';
import SignIn from "./components/SignIn";
import Dashboard from "./components/vendors/Dashboard";
import Profile from "./components/vendors/Profile";
import Submissions from "./components/vendors/Submissions";
import SubmitItem from "./components/vendors/SubmitItem";
import SubmitPromotion from "./components/vendors/SubmitPromotion";
import AdminDashboard from "./components/admin/AdminDashboard";
import ManageProfile from "./components/admin/ManageProfile";
import ManagePromotions from "./components/admin/ManagePromotions";
import ManageSubmissions from "./components/admin/ManageSubmissions";
import ManageUsers from "./components/admin/ManageUsers";

function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <LandingPage />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>
        
      {/* VENDOR'S ROUTS */}

      <Route path="/dashboard">
        <Dashboard />
      </Route>

      <Route path="/submit_item">
        <SubmitItem />
      </Route>

      <Route path="/submit_promotion">
        <SubmitPromotion />
      </Route>

      <Route path="/submissions">
        <Submissions />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      {/* ADMIN'S ROUTS */}

      <Route path="/admin_dashboard">
        <AdminDashboard />
      </Route>

      <Route path="/manage_submissions">
        <ManageSubmissions />
      </Route>

      <Route path="/manage_promotions">
        <ManagePromotions />
      </Route>

      <Route path="/manage_users">
        <ManageUsers />
      </Route>

      <Route path="/change_profile">
        <ManageProfile />
      </Route>

    </div>
  );
}

export default App;