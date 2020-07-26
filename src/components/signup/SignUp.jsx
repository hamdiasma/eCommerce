import React, { Component } from "react";
import { auth, createUserProfilrDocument } from "../../firebase/farbase";

import FormInput from "../formInput/FormInput";
import CustomButton from "../custoButton/CustomButton";
import "./SignUp.scss";
export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      photoURL: "",
      password: "",
      confirmPassword: "",
    };
  }

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handelSubmit = async (e) => {
    e.preventDefault();
    const {
      photoURL,
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("password not matched!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfilrDocument(user, { displayName, photoURL });
      this.setState({
        displayName: "",
        email: "",
        photoURL: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      photoURL,
      displayName,
      email,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account </h2>
        <span>Sign up with email and password</span>

        <form className="sign-up-form" onSubmit={this.handelSubmit}>
          <FormInput
            label="displayName"
            type="text"
            name="displayName"
            value={displayName}
            handelChange={this.handelChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handelChange={this.handelChange}
            required
            label="email"
          />
          <FormInput
            type="file"
            name="photoURL"
            value={photoURL}
            handelChange={this.handelChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handelChange={this.handelChange}
            required
            label="password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handelChange={this.handelChange}
            required
            label="confirmPassword"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
