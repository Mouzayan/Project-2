import React, { Component } from "react";
// import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  componentDidMount = async () => {
    const input = "sun";

    const response = await axios({
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${input}/definitions`,
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
}

export default App;
