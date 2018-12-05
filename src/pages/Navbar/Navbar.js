import React, { Component } from "react";
import classes from "./Navbar.css";

class NavBar extends Component {
  render() {
    return (
      <header className={classes.navbar}>
        <nav className={classes.navbar_nav}>
          <div className={classes.nav_logo}>LOGO</div>
          <div className={classes.spacer} />
          <div className={classes.navbar_nav_items}>
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
