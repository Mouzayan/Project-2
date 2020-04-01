import React from "react";
import "./HaikuForms.css";

const HaikuForm = props => {
  let wordSelection;
  if (props.wordChoice.length > 1) {
    wordSelection = props.wordChoice.join(" ");
  } else {
    wordSelection = props.wordChoice[0];
  }
  return (
    <form>
      <p>{wordSelection}</p>
    </form>
  );
};
export default HaikuForm;
