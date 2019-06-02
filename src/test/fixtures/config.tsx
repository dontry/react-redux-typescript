import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux"
import { configureStore } from '../../store'

const store = configureStore();

function renderWithProviders(ui: any, options?: any) {
    return render(<Provider store={store}>{ui}</Provider>, options)
}


export * from "@testing-library/react";
export { renderWithProviders as render }
