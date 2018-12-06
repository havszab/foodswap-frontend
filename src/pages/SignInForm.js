import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../App.css";
import {Redirect} from 'react-router'

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
          [name]: value,
          redirect: false
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let thisRef = this;

    console.log("The form was submitted with the following data:");
    fetch('http://localhost:8443/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
            'Access-Control-Allow-Headers': 'X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Max-Age': '1728000'
        },
        body: JSON.stringify(this.state)

    }).then(response => {
        response.json().then(function(data) {
            thisRef.setState({ redirect: data.login })
        });
    } );
      console.log(this.state);
  }

  render() {
      if (this.state.redirect) {
          return <Redirect to='/list-foods'/>;
      }
    return (
      <div className={style.FormCenter}>
        <form
          className={style.FormFields}
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
              <button
                className={[style.FormField__Button, style.mr - 20].join(" ")}
                onClick={this.handleSubmit}
              >
                Sign In
              </button>{" "}
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
