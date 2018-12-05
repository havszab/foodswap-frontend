import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Navbar from "./pages/Navbar/Navbar";

import "./App.css";

const API = 'http://localhost:8443/login';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: null,
        };
    }
    componentDidMount() {
        const thisRef = this;
        fetch(API)
            .then(response => {
                response.json().then(function(data) {
                    thisRef.setState({ groups: data.render })
                });
            } );
    }

  render() {
    return (
      <Router basename="/react-auth-ui/" >
        <div className="App">
          <div className="App__Aside" />
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/list-foods" component={Navbar} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
