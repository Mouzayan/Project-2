import React from "react";
import { storiesOf } from "@storybook/react";
import HaikuForm from "./HaikuForm.js";

storiesOf("HaikuForm", module)
  .add("5-Syllables", () => (
    <HaikuForm label="Haiku Line 1" test="primary" value="5 syllables" />
  ))

  .add("7-Syllables", () => (
    <HaikuForm label="Haiku Line 2" test="primary" value="7 syllables" />
  ))

  .add("Last-5-Syllables", () => (
    <HaikuForm label="Haiku Line 3" test="primary" value="5 syllables" />
  ));
