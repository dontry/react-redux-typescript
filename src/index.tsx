import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { configureStore } from "./store";
import { theme } from "theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
