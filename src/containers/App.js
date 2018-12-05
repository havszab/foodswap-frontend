import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
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
                    thisRef.setState({ groups: data.render.toString() })
                });
            } );
    }

    render() {
    return (
      <div className="App">
        <Navbar groups={this.state.groups}/>
      </div>
    );
  }
}

export default App;
