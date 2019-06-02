import { Customer } from "../models";

export const SELECT_CUSTOMER = "SELECT_CUSTOMER";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const DELETE_CUSTOMER = "DELETE_CUSTOMER";
export const TOGGLE_EDITOR_DIALOG = "TOGGLE_EDITOR_DIALOG";
export const UPDATE_QUERY = "UPDATE_QUERY";

export interface SelectCustomerAction {
  type: typeof SELECT_CUSTOMER;
  payload: string | null;
}

export interface AddCustomerAction {
  type: typeof ADD_CUSTOMER;
  payload: Customer;
}

export interface DeleteCustomerAction {
  type: typeof DELETE_CUSTOMER;
  payload: string;
}

export interface UpdateCustomerAction {
  type: typeof UPDATE_CUSTOMER;
  payload: {
    id: string;
    customer: Customer;
  };
}

export interface ToggleEditorDialogAtion {
  type: typeof TOGGLE_EDITOR_DIALOG;
  payload: boolean;
}

export interface UpdateQueryAction {
  type: typeof UPDATE_QUERY;
  payload: string;
}
