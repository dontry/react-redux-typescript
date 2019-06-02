import React from "react";
import CustomerList from "./index";
import { createCustomer } from "../../test/fixtures/customerMock";
import { render } from "@testing-library/react";

describe("customerList", () => {
  it("should render 3 customers", () => {
    const customers = [createCustomer(), createCustomer(), createCustomer()];

    const { getAllByTestId } = render(<CustomerList customers={customers} />);

    expect(getAllByTestId("customer-name").length).toBe(3);
  });
});
