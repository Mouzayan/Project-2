import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import Header from "./Header";
import "../Components/Header.css";

storiesOf("Header", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />);
