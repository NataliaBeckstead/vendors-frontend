import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

function SignIn() {

  const [signInFormState, setSignInFormState] = useState({
    emailSignIn: "",
    passwordSignIn: ""
  });

  const [signUpFormState, setSignUpFormState] = useState({
    username: "",
    broker: "",
    email: "",
    phone: "",
    password: ""
  });

  const formChangeIn = (e) => {
    e.persist();
    const newInData = {
      ...signInFormState,
      [e.target.name]: e.target.value
    };
    
    // validateChange(e); // for each change in input, do inline validation
    setSignInFormState(newInData);
  };

  const formChangeUp = (e) => {
    e.persist();
    const newUpData = {
      ...signUpFormState,
      [e.target.name]: e.target.value
    };

    // validateChange(e); // for each change in input, do inline validation
    setSignUpFormState(newUpData);
  };

  return (
    <div className="cont">
      <div className="form sign-in">
        <h2>Welcome back</h2>
        <form>
          <label htmlFor="emailSignIn">email
            <input id="emailSignIn" name="emailSignIn" type="email" value={signInFormState.emailSignIn} onChange={formChangeIn} />
          </label>
          <label htmlFor="passwordSignIn">password
            <input id="passwordSignIn" name="passwordSignIn" type="password" value={signInFormState.passwordSignIn} onChange={formChangeIn} />
          </label>
          {/* TODO functionality for forgot password */}
          {/* <p className="forgot-pass">Forgot password?</p> */}
          <button type="button" className="submit">Sign In</button>
        </form>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <h2>One of us?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
          </div>
          <div className="img__btn" onClick={() => {document.querySelector('.cont').classList.toggle('s--signup');}}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create a new account</h2>
          <form>
            <label htmlFor="username">username
              <input id="username" name="username" type="text" value={signUpFormState.username} onChange={formChangeUp} />
            </label>
            <label htmlFor="broker">broker
              <input id="broker" name="broker" type="text" value={signUpFormState.broker} onChange={formChangeUp} />
            </label>
            <label htmlFor="email">email
              <input id="email" name="email" type="email" value={signUpFormState.email} onChange={formChangeUp} />
            </label>
            <label htmlFor="phone">phone
              <input id="phone" name="phone" type="tel" value={signUpFormState.phone} onChange={formChangeUp} /> 
            </label>
            <label htmlFor="password">password
              <input id="password" name="password" type="password" value={signUpFormState.password} onChange={formChangeUp} />
            </label>
            <button type="button" className="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
  
}

export default SignIn;