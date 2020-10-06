import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import logo from "../images/logo-red.png";

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

  const [serverError, setServerError] = useState("");
  const [buttonUpDisabled, setButtonUpDisabled] = useState(true);
  const [buttonInDisabled, setButtonInDisabled] = useState(true);

  const [errorsIn, setErrorsIn] = useState({
    emailSignIn: "",
    passwordSignIn: ""
  });

  const [errorsUp, setErrorsUp] = useState({
    username: "",
    broker: "",
    email: "",
    phone: "",
    password: ""
  });

  const formSchemaIn = yup.object().shape({
    emailSignIn: yup
      .string()
      .email("Must be a valid email")
      .required("Must include an email"),
    passwordSignIn: yup.string()
        .required('Please create a password')
        .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
  });

  const formSchemaUp = yup.object().shape({
    username: yup.string().required("Name is a required field"),
    broker: yup.string().required("Broker is a required field"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Must include an email"),
    phone: yup
      .string()
      .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid')
      .required("Must include a phone number"),
    password: yup.string()
        .required('Please create a password')
        .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    terms: yup.boolean().oneOf([true], "Please agree to Terms & Conditions")
  });
  
  useEffect(() => {
    formSchemaUp.isValid(signUpFormState).then((isValid) => {
      setButtonUpDisabled(!isValid);
    });
    formSchemaIn.isValid(signInFormState).then((isValid) => {
      setButtonInDisabled(!isValid);
    });
  }, [signInFormState, signUpFormState]);

  const validateChangeIn = (e) => {
    yup
      .reach(formSchemaIn, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorsIn({
          ...errorsIn,
          [e.target.name]: ""
        });
      })
      .catch((err) => {
        setErrorsIn({
          ...errorsIn,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const validateChangeUp = (e) => {
    yup
      .reach(formSchemaUp, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorsUp({
          ...errorsUp,
          [e.target.name]: ""
        });
      })
      .catch((err) => {
        setErrorsUp({
          ...errorsUp,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const formChangeIn = (e) => {
    e.persist();
    const newInData = {
      ...signInFormState,
      [e.target.name]: e.target.value
    };
    validateChangeIn(e);
    setSignInFormState(newInData);
  };

  const formChangeUp = (e) => {
    e.persist();
    const newUpData = {
      ...signUpFormState,
      [e.target.name]: e.target.value
    };
    validateChangeUp(e);
    setSignUpFormState(newUpData);
  };

  const formSubmitIn = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    // TODO: replace URL for mine backend, delete console.logs
    axios
      .post("https://reqres.in/api/users", signInFormState)
      .then((res) => {
        console.log("success!", res.data);
        setServerError(null);
        setSignInFormState({
          emailSignIn: "",
          passwordSignIn: ""
        });
      })
      .catch((err) => {
        setServerError("oops! something happened!");
      });
  };

  const formSubmitUp = (e) => {
    e.preventDefault();
    console.log("form submitted!");
    // TODO: replace URL for mine backend, delete console.logs
    axios
      .post("https://reqres.in/api/users", signUpFormState)
      .then((res) => {
        console.log("success!", res.data);
        setServerError(null);
        setSignUpFormState({
          username: "",
          broker: "",
          email: "",
          phone: "",
          password: ""
        });
      })
      .catch((err) => {
        setServerError("oops! something happened!");
      });
  };

  return (
    <div className="cont">
      <div className="form sign-in">
        <h2>Welcome back</h2>
        <form onSubmit={formSubmitIn}>
          {serverError ? <p className="error">{serverError}</p> : null}
          <label htmlFor="emailSignIn">email
            <input id="emailSignIn" name="emailSignIn" type="email" value={signInFormState.emailSignIn} onChange={formChangeIn} />
          </label>
          {errorsIn.emailSignIn.length > 0 ? <p className="error">{errorsIn.emailSignIn}</p> : null}
          <label htmlFor="passwordSignIn">password
            <input id="passwordSignIn" name="passwordSignIn" type="password" value={signInFormState.passwordSignIn} onChange={formChangeIn} />
          </label>
          {errorsIn.passwordSignIn.length > 0 ? <p className="error">{errorsIn.passwordSignIn}</p> : null}
          {/* TODO functionality for forgot password */}
          {/* <p className="forgot-pass">Forgot password?</p> */}
          <button type="submit" className="submit" disabled={buttonInDisabled} >Sign In</button>
        </form>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <img src={logo} alt="Harmons logo" className="redlogo"/>
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div className="img__text m--in">
            <img src={logo} alt="Harmons logo" className="redlogo" />
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
          <form onSubmit={formSubmitUp}>
            {serverError ? <p className="error">{serverError}</p> : null}
            <label htmlFor="username">username
              <input id="username" name="username" type="text" value={signUpFormState.username} onChange={formChangeUp} />
            </label>
            {errorsUp.username.length > 0 ? <p className="error">{errorsUp.username}</p> : null}
            <label htmlFor="broker">broker
              <input id="broker" name="broker" type="text" value={signUpFormState.broker} onChange={formChangeUp} />
            </label>
            {errorsUp.broker.length > 0 ? <p className="error">{errorsUp.broker}</p> : null}
            <label htmlFor="email">email
              <input id="email" name="email" type="email" value={signUpFormState.email} onChange={formChangeUp} />
            </label>
            {errorsUp.email.length > 0 ? <p className="error">{errorsUp.email}</p> : null}
            <label htmlFor="phone">phone
              <input id="phone" name="phone" type="tel" value={signUpFormState.phone} onChange={formChangeUp} /> 
            </label>
            {errorsUp.phone.length > 0 ? <p className="error">{errorsUp.phone}</p> : null}
            <label htmlFor="password">password
              <input id="password" name="password" type="password" value={signUpFormState.password} onChange={formChangeUp} />
            </label>
            {errorsUp.password.length > 0 ? <p className="error">{errorsUp.password}</p> : null}
            <button type="submit" className="submit" disabled={buttonUpDisabled} >Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
  
}

export default SignIn;