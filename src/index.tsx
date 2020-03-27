import * as React from "react";
import { render } from "react-dom";
import Root from "./containers/Root";

const container = document.querySelector("#root");

if (container) {
  render(<Root />, container);
}
