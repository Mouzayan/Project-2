import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Words from "./Components/Words";
import UndoButton from "./Components/UndoButton";
import HaikuForm from "./Components/HaikuForm/HaikuForm";
import About from "./Components/About";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resultVerbs: [],
      resultNouns: [],
      resultAdjectives: [],
      resultAdverbs: [],
      resultConjunctions: [],

      lineOne: {
        syllableCount: 0,
        wordArray: []
      },
      lineTwo: {
        syllableCount: 0,
        wordArray: []
      },
      lineThree: {
        syllableCount: 0,
        wordArray: []
      }
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
      // console.log(responseVerb);

      if (
        responseVerb.data.syllables &&
        responseVerb.data.syllables.count < 4
      ) {
        const { word, syllables } = responseVerb.data;
        if (responseVerb.data.syllables) {
          this.setState({
            resultsVerb: this.state.resultVerbs.push({
              word: word,
              count: syllables.count
            })
          });
        } else {
          i -= 1;
        }
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
      // console.log(responseNoun);

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
      // console.log(responseAdverb);

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
      // console.log(responseAdjective);

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
      this.setState({
        resultConjunctions: [
          { word: "he", syllable: 1 },
          { word: "she", syllable: 1 },
          { word: "they", syllable: 1 },
          { word: "it", syllable: 1 },
          { word: "you", syllable: 1 },
          { word: "us", syllable: 1 },
          { word: "we", syllable: 1 },
          { word: "I", syllable: 1 },
          { word: "am", syllable: 1 },
          { word: "but", syllable: 1 },
          { word: "and", syllable: 1 },
          { word: "if", syllable: 1 },
          { word: "the", syllable: 1 },
          { word: "nor", syllable: 1 },
          { word: "then", syllable: 1 },
          { word: "or", syllable: 1 },
          { word: "no", syllable: 1 },
          { word: "not", syllable: 1 },
          { word: "none", syllable: 1 },
          { word: "neither", syllable: 2 },
          { word: "oops", syllable: 1 },
          { word: "yikes", syllable: 1 },
          { word: "either", syllable: 2 }
        ]
      });

      // if (resultConjunctions.data.syllables) {
      //   const { word, syllables } = resultConjunctions.data;
      // this.setState({
      //   resultsArticle: this.state.resultConjunctions.push({
      //     word: word,
      //     count: syllables.count
      //   })
      // });
      // } else {
      //   i--;
      // }
    }
  };

  handleWordInput = item => {
    console.log(item);

    if (
      this.state.lineThree.syllableCount + item.count > 5 &&
      this.state.lineThree.syllableCount === 5
    ) {
      alert("you have maxed out on choosing words!");
    } else if (
      // this.state.lineTwo.syllableCount + item.count < 7 &&
      this.state.lineTwo.syllableCount === 7
    ) {
      this.setState({
        lineThree: {
          wordArray: [...this.state.lineThree.wordArray, item.word],
          syllableCount: (this.state.lineThree.syllableCount += item.count)
        }
      });
    } else if (
      // this.state.lineOne.syllableCount + item.count < 5 &&
      this.state.lineOne.syllableCount === 5
    ) {
      this.setState({
        lineTwo: {
          wordArray: [...this.state.lineTwo.wordArray, item.word],
          syllableCount: (this.state.lineTwo.syllableCount += item.count)
        }
      });
    } else if (this.state.lineOne.syllableCount + item.count < 6) {
      this.setState({
        lineOne: {
          wordArray: [...this.state.lineOne.wordArray, item.word],
          syllableCount: (this.state.lineOne.syllableCount += item.count)
        }
      });
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <header>
            <Header />
            <Route exact path="/about" component={About} />
          </header>

          <main>
            <HaikuForm
              wordChoice={this.state.lineOne.wordArray}
              line={"firstLine"}
              placeholder={"5 syllables remaining"}
            />
            <HaikuForm
              wordChoice={this.state.lineTwo.wordArray}
              line={"secondLine"}
              placeholder={"7 syllables remaining"}
            />
            <HaikuForm
              wordChoice={this.state.lineThree.wordArray}
              line={"thirdLine"}
              placeholder={"5 syllables remaining"}
            />

            <UndoButton />

            <p className="prompt">click a word to begin composing your haiku</p>

            <Words
              wordListVerb={this.state.resultVerbs}
              wordListNoun={this.state.resultNouns}
              wordListAdverb={this.state.resultAdverbs}
              wordListAdjective={this.state.resultAdjectives}
              wordListConjunction={this.state.resultConjunctions}
              handleWordInput={this.handleWordInput}
            />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
