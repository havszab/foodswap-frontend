import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../App.css";
import styleForm from "./AuthForm.css";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      secPassword: "",
      firstName: "",
      lastName: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={style.App}>
        <div className={styleForm.Auth__Aside} />
        <div className={style.App__Form}>
          <div>
            <div className={style.FormTitle}>
              <NavLink
                to="/sign-in"
                activeClassName={style["FormTitle__Link--Active"]}
                className={style.FormTitle__Link}
              >
                Sign In
              </NavLink>
              or
              <NavLink
                exact
                to="/"
                activeClassName={style["FormTitle__Link--Active"]}
                className={style.FormTitle__Link}
              >
                Sign Up
              </NavLink>
            </div>
            <div className={style.FormCenter}>
              <form onSubmit={this.handleSubmit} className={style.FormFields}>
                <div className={style.FormField}>
                  <label className={style.FormField__Label} htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="f_name"
                    className={style.FormField__Input}
                    placeholder="Enter your first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className={style.FormField}>
                  <label className={style.FormField__Label} htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="l_name"
                    className={style.FormField__Input}
                    placeholder="Enter your last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className={style.FormField}>
                  <label className={style.FormField__Label} htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className={style.FormField__Input}
                    placeholder="Enter your password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className={style.FormField}>
                  <label
                    className={style.FormField__Label}
                    htmlFor="secPassword"
                  >
                    Re-entered Password
                  </label>
                  <input
                    type="password"
                    id="sec_password"
                    className={style.FormField__Input}
                    placeholder="Re-enter your password"
                    name="secPassword"
                    value={this.state.secPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className={style.FormField}>
                  <label className={style.FormField__Label} htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={style.FormField__Input}
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className={style.FormField}>
                  <label className={style.FormField__CheckboxLabel}>
                    <input
                      className={style.FormField__Checkbox}
                      type="checkbox"
                      name="hasAgreed"
                      value={this.state.hasAgreed}
                      onChange={this.handleChange}
                    />{" "}
                    I agree all statements in{" "}
                    <a href="" className={style.FormField__TermsLink}>
                      terms of service
                    </a>
                  </label>
                </div>

                <div cclassName={style.FormField}>
                  <button className={style.FormField__Button}>Sign Up</button>
                  <Link to="/sign-in" className={style.FormField__Link}>
                    I'm already member
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
