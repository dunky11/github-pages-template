import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import App from "./App";
import config from "./config";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <link
      href="https://fonts.googleapis.com/css?family=Baloo+Bhaijaan|Roboto:300,400,500"
      rel="stylesheet"
    />
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
