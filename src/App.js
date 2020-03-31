import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Words from "./Components/Words";
import DragAndDrop from "./Components/DragAndDrop";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resultVerbs: [],
      resultNouns: [],
      resultAdjectives: [],
      resultAdverbs: [],
      resultConjunctions: [],
      resultsInterjection: []
    };
  }

  componentDidMount = async () => {
    for (let i = 0; i < 5; i += 1) {
      const responseVerb = await axios({
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/`,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
        },
        params: {
          random: "true",
          partOfSpeech: "verb",
          hasDetails: "syllables"
        }
      });
      console.log(responseVerb);

      if (responseVerb.data.syllables) {
        const { word, syllables } = responseVerb.data;
        this.setState({
          resultsVerb: this.state.resultVerbs.push({
            word: word,
            count: syllables.count
          })
        });
      } else {
        i--;
      }
    }

    for (let i = 0; i < 5; i += 1) {
      const responseNoun = await axios({
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/`,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
        },
        params: {
          random: "true",
          partOfSpeech: "noun",
          hasDetails: "syllables"
        }
      });
      console.log(responseNoun);

      if (responseNoun.data.syllables) {
        const { word, syllables } = responseNoun.data;
        this.setState({
          resultsNoun: this.state.resultNouns.push({
            word: word,
            count: syllables.count
          })
        });
      } else {
        i--;
      }
    }

    for (let i = 0; i < 5; i += 1) {
      const responseAdverb = await axios({
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/`,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
        },
        params: {
          random: "true",
          partOfSpeech: "adverb",
          hasDetails: "syllables"
        }
      });
      console.log(responseAdverb);

      if (responseAdverb.data.syllables) {
        const { word, syllables } = responseAdverb.data;
        this.setState({
          resultsAdverb: this.state.resultAdverbs.push({
            word: word,
            count: syllables.count
          })
        });
      } else {
        i--;
      }
    }

    for (let i = 0; i < 5; i += 1) {
      const responseAdjective = await axios({
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/`,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
        },
        params: {
          random: "true",
          partOfSpeech: "adjective",
          hasDetails: "syllables"
        }
      });
      console.log(responseAdjective);

      if (responseAdjective.data.syllables) {
        const { word, syllables } = responseAdjective.data;
        this.setState({
          resultsAdjective: this.state.resultAdjectives.push({
            word: word,
            count: syllables.count
          })
        });
      } else {
        i--;
      }
    }

    for (let i = 0; i < 5; i += 1) {
      const responseConjunctions = await axios({
        method: "GET",
        url: `https://wordsapiv1.p.rapidapi.com/words/`,
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
        },
        params: {
          random: "true",
          partOfSpeech: "article",
          hasDetails: "syllables"
        }
      });
      console.log(responseConjunctions);

      if (responseConjunctions.data.syllables) {
        const { word, syllables } = responseConjunctions.data;
        this.setState({
          resultsArticle: this.state.resultConjunctions.push({
            word: word,
            count: syllables.count
          })
        });
      } else {
        i--;
      }
    }
  };

  render() {
    return (
      <>
        <div className="App"></div>
        <header>
          <Header />
        </header>

        <main>
          <DragAndDrop />

          <p>drag and drop a word to begin composing your haiku</p>

          <Route
            exact
            path="/"
            render={routerProps => (
              <Words
                wordListVerb={this.state.resultVerbs}
                {...routerProps}
                wordListNoun={this.state.resultNouns}
                {...routerProps}
                wordListAdverb={this.state.resultAdverbs}
                {...routerProps}
                wordListAdjective={this.state.resultAdjectives}
                {...routerProps}
                wordListConjunction={this.state.resultConjunctions}
                {...routerProps}
              />
            )}
          />
        </main>
      </>
    );
  }
}

export default App;
