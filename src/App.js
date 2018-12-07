import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import Navbar from "./pages/Navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename="/">
        <div>
          <div>
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
