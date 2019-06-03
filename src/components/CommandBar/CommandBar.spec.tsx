import React from "react";
import { render, fireEvent } from "../../test/fixtures/config";
import * as customerActions from "../../actions/customers";
import * as uiActions from "../../actions/ui";
import CommandBar from "./index";

describe("CommandBar", () => {
  const onOpen = jest.fn(() => {
    uiActions.toggleEditorDialog(true);
  });
  it("should  open Editor dialog by clicking the create button", () => {
    const spy = jest.spyOn(uiActions, "toggleEditorDialog");
    const { getByTestId } = render(
      <CommandBar onOpen={onOpen} onChange={customerActions.updateQuery} />
    );

    fireEvent.click(getByTestId("create-btn"));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(true);
  });

  it("should update query by typing in search-bar ", () => {
    const spy = jest.spyOn(customerActions, "updateQuery");
    const { getByLabelText } = render(
      <CommandBar onOpen={onOpen} onChange={customerActions.updateQuery} />
    );

    const input: HTMLInputElement = getByLabelText("Search") as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: "q" } });

    expect(input.value).toBe("q");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith("q");
  });
});
