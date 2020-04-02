import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HaikuForm from "./HaikuForm/HaikuForm";
import "./Words.css";

class Words extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    let verbOptions = this.props.wordListVerb.map((item, idx) => (
      <li className="servedWord" key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));

    let nounOptions = this.props.wordListNoun.map((item, idx) => (
      <li className="servedWord" key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));

    let adverbOptions = this.props.wordListAdverb.map((item, idx) => (
      <li className="servedWord" key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));

    let adjectiveOptions = this.props.wordListAdjective.map((item, idx) => (
      <li className="servedWord" key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));

    let conjunctionOptions = this.props.wordListConjunction.map((item, idx) => (
      <li className="servedWord" key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));
      

    return (
      <ul  className="servedWords">
        <li>{verbOptions}</li>
        <li>{nounOptions}</li>
        <li>{adverbOptions}</li>
        <li>{adjectiveOptions}</li>
        <li>{conjunctionOptions}</li>
      </ul>
    );
    
  }
}

export default Words;
