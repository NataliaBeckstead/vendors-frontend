import React from 'react';

function Signup() {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" value="username" name="username"></input>
      <label htmlFor="password">Password</label>
      <input id="password" value="password" name="password"></input>
      <label htmlFor="vpassword">verify password</label>
      <input id="vpassword" value="vpassword" name="vpassword"></input>
      <label htmlFor="email">email</label>
      <input id="email" value="email" name="email"></input>
      <label htmlFor="company">company</label>
      <input id="company" value="company" name="company"></input>
    </div>
  );
}

export default Signup;