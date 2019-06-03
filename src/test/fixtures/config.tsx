import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "../../store";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

const store = configureStore();

function renderWithProviders(ui: any, options?: any) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </Provider>,
    options
  );
}

export * from "@testing-library/react";
export { renderWithProviders as render };
