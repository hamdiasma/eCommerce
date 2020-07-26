import React from "react";
import "./RegisterPage.scss";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

const RegisterPage = () => {
  return <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
  </div>;
};

export default RegisterPage;
