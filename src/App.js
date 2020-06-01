import React, { Component } from "react";
import { Route } from "react-router-dom";
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
      resultConjunctions: [],
      resultWords: [],
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
      ],
      wordLoop: [
        { word: "a", count: 1 }, { word: "about", count: 2 }, { word: "above", count: 2 },
        { word: "ache", count: 1 }, { word: "ad", count: 1 }, { word: "after", count: 2 },
        { word: "all", count: 1 }, { word: "am", count: 1 }, { word: "an", count: 1 },
        { word: "apparatus", count: 4 }, { word: "are", count: 1 }, { word: "arm", count: 1 },
        { word: "as", count: 1 }, { word: "ask", count: 1 }, { word: "at", count: 1 },
        { word: "away", count: 2 }, { word: "bare", count: 1 }, { word: "be", count: 1 },
        { word: "beat", count: 1 }, { word: "beauty", count: 2 }, { word: "bed", count: 1 },
        { word: "beneath", count: 2 }, { word: "bitter", count: 2 }, { word: "black", count: 1 },
        { word: "blood", count: 1 }, { word: "blow", count: 1 }, { word: "blue", count: 1 },
        { word: "boil", count: 1 }, { word: "boy", count: 1 }, { word: "breast", count: 1 },
        { word: "but", count: 1 }, { word: "butt", count: 1 }, { word: "by", count: 1 },
        { word: "can", count: 1 }, { word: "chant", count: 1 }, { word: "chocolate", count: 3 },
        { word: "cool", count: 1 }, { word: "could", count: 1 }, { word: "crush", count: 1 },
        { word: "cry", count: 1 }, { word: "day", count: 1 }, { word: "death", count: 1 },
        { word: "delirious", count: 4 }, { word: "diamond", count: 2 }, { word: "did", count: 1 },
        { word: "do", count: 1 }, { word: "dream", count: 1 }, { word: "dress", count: 1 },
        { word: "drive", count: 1 }, { word: "drool", count: 1 }, { word: "drunk", count: 1 },
        { word: "eat", count: 1 }, { word: "ed", count: 1 }, { word: "egg", count: 1 },
        { word: "elaborate", count: 4 }, { word: "enormous", count: 3 }, { word: "fast", count: 2 },
        { word: "feel", count: 1 }, { word: "fiddle", count: 2 }, { word: "finger", count: 2 },
        { word: "fluff", count: 1 }, { word: "for", count: 1 }, { word: "forest", count: 2 },
        { word: "frantic", count: 2 }, { word: "friend", count: 1 }, { word: "from", count: 1 },
        { word: "garden", count: 2 }, { word: "girl", count: 1 }, { word: "go", count: 1 },
        { word: "goddess", count: 2 }, { word: "gorgeous", count: 2 }, { word: "gown", count: 1 },
        { word: "hair", count: 1 }, { word: "has", count: 1 }, { word: "have", count: 1 },
        { word: "he", count: 1 }, { word: "head", count: 1 }, { word: "heave", count: 1 },
        { word: "her", count: 1 }, { word: "here", count: 1 }, { word: "him", count: 1 },
        { word: "his", count: 1 }, { word: "honey", count: 2 }, { word: "hot", count: 1 },
        { word: "how", count: 1 }, { word: "I", count: 1 }, { word: "if", count: 1 },
        { word: "in", count: 1 }, { word: "ing", count: 1 }, { word: "is", count: 1 },
        { word: "it", count: 1 }, { word: "juice", count: 1 }, { word: "lake", count: 1 },
        { word: "language", count: 2 }, { word: "languid", count: 2 }, { word: "lather", count: 2 },
        { word: "lazy", count: 2 }, { word: "less", count: 1 }, { word: "let", count: 1 },
        { word: "lick", count: 1 }, { word: "lie", count: 1 }, { word: "life", count: 1 },
        { word: "light", count: 1 }, { word: "like", count: 1 }, { word: "love", count: 1 },
        { word: "luscious", count: 2 }, { word: "lust", count: 1 }, { word: "mad", count: 1 },
        { word: "man", count: 1 }, { word: "me", count: 1 }, { word: "mean", count: 1 },
        { word: "meat", count: 1 }, { word: "men", count: 1 }, { word: "milk", count: 1 },
        { word: "mist", count: 1 }, { word: "moan", count: 1 }, { word: "moon", count: 1 },
        { word: "mother", count: 2 }, { word: "music", count: 2 }, { word: "must", count: 1 },
        { word: "my", count: 1 }, { word: "need", count: 1 }, { word: "never", count: 2 }, 
     ],

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
  
    async componentDidMount() {
      let testArray = [];
      for (let i = 0; i < 5; i += 1) {
      testArray.push(
        this.state.conjLoop[Math.floor(Math.random() * this.state.conjLoop.length)
        ]
      ); }
      console.log(testArray)
     console.log(this.state.conjLoop)
    this.setState({ resultConjunctions: testArray });
  
    
  let nextArray = [];
  for (let i = 0; i < 31; i += 1) {
    nextArray.push(
      this.state.wordLoop[
        Math.floor(Math.random() * this.state.wordLoop.length)
      ]
    );
  }
  this.setState({ resultWords: nextArray });
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
    // if (this.state.resultConjunctions.length > 0) {
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
                    wordListConjunction={this.state.resultConjunctions}
                    wordListWord={this.state.resultWords}
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
    // } else {
    //   return <div></div>
    // }
  }
}


export default App;
