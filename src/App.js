import React, {useState} from 'react';
import './App.scss';
import {Route} from "react-router-dom";

import LandingPage from './components/LandingPage';
import SignIn from "./components/SignIn";
import Dashboard from "./components/vendors/Dashboard";
import Profile from "./components/vendors/Profile";
import ItemSubmissions from "./components/vendors/ItemSubmissions";
import PromotionSubmissions from "./components/vendors/PromotionSubmissions";
import SubmitItem from "./components/vendors/SubmitItem";
import SubmitPromotion from "./components/vendors/SubmitPromotion";
import MerchandiserMenu from "./components/vendors/MerchandiserMenu";
import AdminDashboard from "./components/admin/AdminDashboard";
import ManageProfile from "./components/admin/ManageProfile";
import ReviewPromotions from "./components/admin/ReviewPromotions";
import DownloadPromotions from "./components/admin/DownloadPromotions";
import SeeAllPromotions from "./components/admin/SeeAllPromotions";
import ReviewSubmissions from "./components/admin/ReviewSubmissions";
import DownloadSubmissions from "./components/admin/DownloadSubmissions";
import SeeAllSubmissions from "./components/admin/SeeAllSubmissions";
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

      <Route path="/merchandising_menu">
        <MerchandiserMenu />
      </Route>

      <Route path="/item_submissions">
        <ItemSubmissions />
      </Route>

      <Route path="/promotion_submissions">
        <PromotionSubmissions />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      {/* ADMIN'S ROUTS */}

      <Route path="/admin_dashboard">
        <AdminDashboard />
      </Route>

      <Route path="/review_submissions">
        <ReviewSubmissions />
      </Route>

      <Route path="/download_submissions">
        <DownloadSubmissions />
      </Route>

      <Route path="/see_all_submissions">
        <SeeAllSubmissions />
      </Route>

      <Route path="/review_promotions">
        <ReviewPromotions />
      </Route>

      <Route path="/download_promotions">
        <DownloadPromotions />
      </Route>

      <Route path="/see_all_promotions">
        <SeeAllPromotions />
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