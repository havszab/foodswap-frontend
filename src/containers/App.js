import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";

const API = 'http://localhost:8080/login';

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
    
}

export default App;
