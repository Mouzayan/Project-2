import React from "react";
import "./UndoButton.css";




const UndoButton = props => (
  <div className='undo'>
    <img className='undoImage' src={props.UndoArrow} />
  </div>
);

export default UndoButton;



// const UndoButton = (props) => (
//   <button className={props.type}>
//     {props.label}
//   </button>
// )
// export default UndoButton; 
