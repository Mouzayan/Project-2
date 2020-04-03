import React from "react";
import { storiesOf } from "@storybook/react";
import UndoButton from "./UndoButton";
import "./UndoButton.css";
import UndoArrow from '../Images/arrow-undo.jpg'

storiesOf("UndoButton", module)
  .add("UndoButton", () => <UndoButton UndoArrow={UndoArrow} />);


  