import React from 'react';

function SignIn() {

  return (
    <div className="cont">
      <div className="form sign-in">
        <h2>Welcome back,</h2>
        <label htmlFor="email">Email
          <input id="email" type="email" />
        </label>
        <label htmlFor="password">Password
          <input id="password" type="password" />
        </label>
        {/* TODO functionality for forgot password */}
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit">Sign In</button>
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
          <h2>Time to feel like home,</h2>
          <label htmlFor="username">username
            <input id="username" type="text" />
          </label>
          <label htmlFor="broker">broker
            <input id="broker" type="text" />
          </label>
          <label htmlFor="email">email
            <input id="email" type="email" />
          </label>
          <label htmlFor="phone">phone
            <input id="phone" type="tel" /> 
          </label>
          <label htmlFor="password">password
            <input id="password" type="password" />
          </label>
          <button type="button" className="submit">Sign Up</button>
        </div>
      </div>
    </div>
  )
  
}

export default SignIn;