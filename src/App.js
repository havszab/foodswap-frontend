import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SignUpForm from "./components/LoginRegistration/SignUpForm";
import SignInForm from "./components/LoginRegistration/SignInForm";
import ListFoods from "./containers/ListFoods";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename="/">
        <div>
          <div>
            <Route exact path="/" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/list-foods" component={ListFoods} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
