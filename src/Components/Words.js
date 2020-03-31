import React, { Component } from "react";
import { Link } from "react-router-dom";

class Words extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.wordListVerb.length === 0) {
    //   return <h1>data loading</h1>;
    // } else {
    let verbOptions = this.props.wordListVerb.map((item, idx) => (
      <div className="wordChoices" key={idx}>
        <Link to={`/resultsVerb/${item.word}`}>
          <ul>
            <li>{item.word}</li>
          </ul>
        </Link>
      </div>
    ));

    let nounOptions = this.props.wordListNoun.map((item, idx) => (
      <div className="wordChoices" key={idx}>
        <Link to={`/resultsNoun/${item.word}`}>
          <ul>
            <li>{item.word}</li>
          </ul>
        </Link>
      </div>
    ));

    let adverbOptions = this.props.wordListAdverb.map((item, idx) => (
      <div className="wordChoices" key={idx}>
        <Link to={`/resultsAdverb/${item.word}`}>
          <ul>
            <li>{item.word}</li>
          </ul>
        </Link>
      </div>
    ));

    let adjectiveOptions = this.props.wordListAdjective.map((item, idx) => (
      <div className="wordChoices" key={idx}>
        <Link to={`/resultsAdjective/${item.word}`}>
          <ul>
            <li>{item.word}</li>
          </ul>
        </Link>
      </div>
    ));

    let conjunctionOptions = this.props.wordListConjunction.map((item, idx) => (
      <div className="wordChoices" key={idx}>
        <Link to={`/resultsConjunction/${item.word}`}>
          <ul>
            <li>{item.word}</li>
          </ul>
        </Link>
      </div>
    ));

    return (
      <div>
        {verbOptions} {nounOptions} {adverbOptions} {adjectiveOptions}
        {conjunctionOptions}
      </div>
    );
  }
}
// }

export default Words;
