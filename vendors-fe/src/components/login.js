import React from 'react';

function Login() {
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input id="username" value="username" name="username"></input>
      <label htmlFor="password">Password</label>
      <input id="password" value="password" name="password"></input>
    </div>
  );
}

export default Login;