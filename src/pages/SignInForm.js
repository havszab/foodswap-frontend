import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../App.css";

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
      <div className={style.FormCenter}>
        <form
          onSubmit={this.handleSubmit}
          className={style.FormFields}
          onSubmit={this.handleSubmit}
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
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className={style.FormField}>
            <Link to="list-foods">
              <button
                className={[style.FormField__Button, style.mr - 20].join(" ")}
              >
                Sign In
              </button>{" "}
            </Link>
            <Link to="/" className={style.FormField__Link}>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
