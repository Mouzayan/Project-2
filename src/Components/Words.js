import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import HaikuForm from "./HaikuForm/HaikuForm";

class Words extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let verbOptions = this.props.wordListVerb.map((item, idx) => (
      <li key={idx} onClick={() => this.props.handleWordInput(item)}>
        {item.word}
      </li>
    ));

    let nounOptions = this.props.wordListNoun.map((item, idx) => (
      <li key={idx}>{item.word}</li>
    ));

    let adverbOptions = this.props.wordListAdverb.map((item, idx) => (
      <li key={idx}>{item.word}</li>
    ));

    let adjectiveOptions = this.props.wordListAdjective.map((item, idx) => (
      <li key={idx}>{item.word}</li>
    ));

    let conjunctionOptions = this.props.wordListConjunction.map((item, idx) => (
      <li key={idx}>{item.word}</li>
    ));

    return (
      <ul>
        {verbOptions} {nounOptions} {adverbOptions} {adjectiveOptions}
        {conjunctionOptions}
      </ul>
    );
  }
}

export default Words;
