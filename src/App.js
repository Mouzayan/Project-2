import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Words from "./Components/Words";
import HaikuForm from "./Components/HaikuForm/HaikuForm";

// import DragAndDrop from "./Components/DragAndDrop";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resultVerbs: [],
      resultNouns: [],
      resultAdjectives: [],
      resultAdverbs: [],
      resultConjunctions: [],
      resultsInterjection: [],
      lineOne: {
        wordCount: 0,
        wordArray: []
      },
      lineTwo: {
        wordCount: 0,
        wordArray: []
      },
      lineThree: {
        wordCount: 0,
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
      // console.log(responseConjunctions);

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

  handleWordInput = item => {
    console.log(item);

    if (this.state.lineTwo.wordCount > 7) {
      this.setState({
        lineThree: {
          wordArray: [...this.state.lineThree.wordArray, item.word],
          wordCount: (this.state.lineThree.wordCount += item.count)
        }
      });
    } else if (this.state.lineOne.wordCount > 5) {
      this.setState({
        lineTwo: {
          wordArray: [...this.state.lineTwo.wordArray, item.word],
          wordCount: (this.state.lineTwo.wordCount += item.count)
        }
      });
    } else if (this.state.lineThree.wordCount > 5) {
      alert("not working");
    } else {
      this.setState({
        lineOne: {
          wordArray: [...this.state.lineOne.wordArray, item.word],
          wordCount: (this.state.lineOne.wordCount += item.count)
        }
      });
    }
  };

  // reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SET_DROP_DEPTH":
  //       return { ...state, dropDepth: action.dropDepth };
  //     case "SET_IN_DROP_ZONE":
  //       return { ...state, inDropZone: action.inDropZone };
  //     case "ADD_FILE_TO_LIST":
  //       return { ...state, fileList: state.fileList.concat(action.files) };
  //     default:
  //       return state;
  //   }
  // };

  // let [data, dispatch] = React.useReducer(this.reducer, { dropDepth: 0, inDropZone: false, fileList: []}
  //   )

  render() {
    return (
      <>
        <div className="App">
          <header>
            <Header />
          </header>

          <main>
            <HaikuForm wordChoice={this.state.lineOne.wordArray} />
            <HaikuForm wordChoice={this.state.lineTwo} />
            <HaikuForm wordChoice={this.state.lineThree} />

            {/* <div>
            <DragAndDrop data={data} dispatch={dispatch} />

            <ol className="dropped-files">
              {data.fileList.map(f => {
                return (<li key={f.name}>{f.name}</li>
                )
              })}
            </ol>
          </div> */}

            <p>click a word to begin composing your haiku</p>

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
      </>
    );
  }
}

export default App;
