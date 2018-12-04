import React, { Component } from "react";
import classes from "./Navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="navbar">
        <nav className="navbar-nav">
          <div className="nav-logo">LOGO</div>
          <div className="spacer" />
          <div className="navbar-nav-items">
            <ul>
              <li>
                <a>Create Group</a>
              </li>
              <li>
                <a>Join Group</a>
              </li>
              <li>
                <a>New swap request</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
