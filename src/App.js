import React from 'react';
import './App.scss';
import {Route} from "react-router-dom";

import LandingPage from './components/LandingPage';
import SignIn from "./components/SignIn";
import NewItemFrom from "./components/vendors/NewItemForm.js";

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
        <SignIn />
      </Route>

      <Route path="/submit_item">
        <SignIn />
      </Route>

      <Route path="/submit_promotion">
        <SignIn />
      </Route>

      <Route path="/submissions">
        <SignIn />
      </Route>

      <Route path="/profile">
        <SignIn />
      </Route>

      {/* ADMIN'S ROUTS */}

      <Route path="/admin_dashboard">
        <SignIn />
      </Route>

      <Route path="/manage_submissions">
        <SignIn />
      </Route>

      <Route path="/manage_promotions">
        <SignIn />
      </Route>

      <Route path="/manage_users">
        <SignIn />
      </Route>

      <Route path="/change_profile">
        <SignIn />
      </Route>

    </div>
  );
}

export default App;