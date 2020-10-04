import React from 'react';

function Signup() {
  
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" value="username" name="username"></input>
        <label htmlFor="broker">Broker</label>
        <input id="broker" value="broker" name="broker"></input>
        
        <label htmlFor="email">email</label>
        <input id="email" value="email" name="email"></input>
        <label htmlFor="phone">phone number</label>
        <input id="phone" value="phone" name="phone"></input>

        <label htmlFor="password">Password</label>
        <input id="password" value="password" name="password"></input>
        <label htmlFor="confirm_password">confirm password</label>
        <input id="confirm_password" value="confirm_password" name="confirm_password"></input>

        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default Signup;