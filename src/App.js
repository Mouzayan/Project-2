<<<<<<< HEAD
import React, { Component } from "react";
// import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      input: ""
    };
  }

  componentDidMount = async () => {
    const input = "hourglass";

    const response = await axios({
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${input}/syllables`,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
      }
    });
    console.log(response);
    this.setState({
      results: response.data
    });
  };

  render() {
    return (
      <>
        <div className="App">Hello World</div>
      </>
    );
  }
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> 81288bd19905c41d87ee6c9155c7cca5536eeb62
}

export default App;
