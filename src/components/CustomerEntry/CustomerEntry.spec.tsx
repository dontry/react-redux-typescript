import React from "react";
import CustomerEntry from "./index";
import { render, fireEvent } from "../../test/fixtures/config";
import { createCustomer } from "../../test/fixtures/customerMock";
import * as actions from "../../actions/customers";

describe("CustomerEntry", () => {
  it("should render the component with a customer name", () => {
    const customer = createCustomer();
    const { getByTestId } = render(<CustomerEntry customer={customer} />);
    expect(getByTestId("customer-name")).toHaveTextContent(
      `${customer.firstName} ${customer.lastName}`
    );
  });

  it("should render a customer", () => {
    const customer = createCustomer({ seed: 1 });
    const { container, getByTestId } = render(<CustomerEntry customer={customer} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("calls deleteCustomer function by clicking delete button", () => {
    const spy = jest.spyOn(actions, "deleteCustomer");
    const customer = createCustomer();

    const { getByTestId } = render(
      <CustomerEntry customer={customer} onDelete={actions.deleteCustomer} />
    );

    fireEvent.click(getByTestId("delete-btn"));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(customer.id);
  });
});
