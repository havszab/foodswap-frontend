import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import style from "../../App.css";
import styleForm from "./AuthForm.css";
import axios from "axios";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    console.log(name);
    console.log(this.state);
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

  // const user = {
  //   ...this.state
  // }
  // axios.post("localhost:8080/login", user)
  //     .then(response => {
  //       console.log("The form was submitted with the following response: " + response);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  }

  render() {
    return (
      <div className={style.App}>
        <div className={styleForm.Auth__Aside} />
        <div className={style.App__Form}>
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
            <br />
            for <span className={style.FormTitle}>Foodswap</span>
          </div>
          <div className={style.FormCenter}>
            <form
              //onSubmit={this.handleSubmit}
              className={style.FormField}
             //onSubmit={this.handleSubmit}
            >
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
                <label className={style.FormField__Label} htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={style.FormField__Input}
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.logPassword}
                  onChange={this.handleChange}
                />
              </div>

              <div className={style.FormField}>
                {/*//onClick={this.handleSubmit}>*/}
                <Link to="list-foods">
                  <button className={style.FormField__Button}>Sign In</button>
                </Link>
                <Link to="/register" className={style.FormField__Link}>
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
