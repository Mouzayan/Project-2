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
import UndoArrow from "./Images/arrow-undo.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resultVerbs: [],
      resultNouns: [],
      resultAdjectives: [],
      resultAdverbs: [],
      resultConjunctions: [],
      conjLoop: [],

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

  // componentDidMount = async () => {
  //   for (let i = 0; i < 9; i += 1) {
  //     const responseVerb = await axios({
  //       method: "GET",
  //       url: `https://wordsapiv1.p.rapidapi.com/words/`,
  //       headers: {
  //         "content-type": "application/octet-stream",
  //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  //         "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
  //       },
  //       params: {
  //         random: "true",
  //         partOfSpeech: "verb",
  //         hasDetails: "syllables"
  //       }
  //     });
  //     // console.log(responseVerb);

  //     if (
  //       responseVerb.data.syllables &&
  //       responseVerb.data.syllables.count < 4
  //     ) {
  //       const { word, syllables } = responseVerb.data;
  //       if (responseVerb.data.syllables) {
  //         this.setState({
  //           resultsVerb: this.state.resultVerbs.push({
  //             word: word,
  //             count: syllables.count
  //           })
  //         });
  //       } else {
  //         i -= 1;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < 10; i += 1) {
  //     const responseNoun = await axios({
  //       method: "GET",
  //       url: `https://wordsapiv1.p.rapidapi.com/words/`,
  //       headers: {
  //         "content-type": "application/octet-stream",
  //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  //         "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
  //       },
  //       params: {
  //         random: "true",
  //         partOfSpeech: "noun",
  //         hasDetails: "syllables"
  //       }
  //     });
  //     // console.log(responseNoun);

  //     if (
  //       responseNoun.data.syllables &&
  //       responseNoun.data.syllables.count < 4
  //     ) {
  //       if (responseNoun.data.syllables) {
  //         const { word, syllables } = responseNoun.data;
  //         this.setState({
  //           resultsNoun: this.state.resultNouns.push({
  //             word: word,
  //             count: syllables.count
  //           })
  //         });
  //       } else {
  //         i--;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < 10; i += 1) {
  //     const responseAdverb = await axios({
  //       method: "GET",
  //       url: `https://wordsapiv1.p.rapidapi.com/words/`,
  //       headers: {
  //         "content-type": "application/octet-stream",
  //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  //         "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
  //       },
  //       params: {
  //         random: "true",
  //         partOfSpeech: "adverb",
  //         hasDetails: "syllables"
  //       }
  //     });
  //     // console.log(responseAdverb);

  //     if (
  //       responseAdverb.data.syllables &&
  //       responseAdverb.data.syllables.count < 4
  //     ) {
  //       if (responseAdverb.data.syllables) {
  //         const { word, syllables } = responseAdverb.data;
  //         this.setState({
  //           resultsAdverb: this.state.resultAdverbs.push({
  //             word: word,
  //             count: syllables.count
  //           })
  //         });
  //       } else {
  //         i--;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < 10; i += 1) {
  //     const responseAdjective = await axios({
  //       method: "GET",
  //       url: `https://wordsapiv1.p.rapidapi.com/words/`,
  //       headers: {
  //         "content-type": "application/octet-stream",
  //         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
  //         "x-rapidapi-key": "960eb1aa43msh14120de21c57712p123f2djsnb20a9c6e475c"
  //       },
  //       params: {
  //         random: "true",
  //         partOfSpeech: "adjective",
  //         hasDetails: "syllables"
  //       }
  //     });
  //     // console.log(responseAdjective);

  //     if (
  //       responseAdjective.data.syllables &&
  //       responseAdjective.data.syllables.count < 4
  //     ) {
  //       if (responseAdjective.data.syllables) {
  //         const { word, syllables } = responseAdjective.data;
  //         this.setState({
  //           resultsAdjective: this.state.resultAdjectives.push({
  //             word: word,
  //             count: syllables.count
  //           })
  //         });
  //       } else {
  //         i--;
  //       }
  //     }
  //   }

    this.setState({
      conjLoop: [
        { word: "he", count: 1 },
        { word: "she", count: 1 },
        { word: "they", count: 1 },
        { word: "it", count: 1 },
        { word: "you", count: 1 },
        { word: "us", count: 1 },
        { word: "we", count: 1 },
        { word: "I", count: 1 },
        { word: "am", count: 1 },
        { word: "but", count: 1 },
        { word: "and", count: 1 },
        { word: "if", count: 1 },
        { word: "the", count: 1 },
        { word: "nor", count: 1 },
        { word: "then", count: 1 },
        { word: "or", count: 1 },
        { word: "no", count: 1 },
        { word: "not", count: 1 },
        { word: "none", count: 1 },
        { word: "neither", count: 2 },
        { word: "oops", count: 1 },
        { word: "yikes", count: 1 },
        { word: "either", count: 2 }
      ]
    });
    let testArray = [];
    for (let i = 0; i < 5; i += 1) {
      testArray.push(
        this.state.conjLoop[
          Math.floor(Math.random() * this.state.conjLoop.length)
        ]
      );
    }
    this.setState({ resultConjunctions: testArray });
  };

  handleWordInput = item => {
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
            <div className="haikuDiv">
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
            </div>

            <div className="undo">
              <UndoButton UndoArrow={UndoArrow} />
            </div>

            <p className="prompt">click a word to begin composing your haiku</p>

            <div className="wordsWrapper">
              <div className="wordsDiv">
                <Words
                  wordListVerb={this.state.resultVerbs}
                  wordListNoun={this.state.resultNouns}
                  wordListAdverb={this.state.resultAdverbs}
                  wordListAdjective={this.state.resultAdjectives}
                  wordListConjunction={this.state.resultConjunctions}
                  handleWordInput={this.handleWordInput}
                />
              </div>
            </div>
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
