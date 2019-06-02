import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  AddCustomerAction,
  DeleteCustomerAction,
  UpdateCustomerAction
} from "./types";
import { Customer } from "../models";

export function addCustomer(newCustomer: Customer): AddCustomerAction {
  return {
    type: ADD_CUSTOMER,
    payload: newCustomer
  };
}

export function updateCustomer(id: string, customer: Customer): UpdateCustomerAction {
  return {
    type: UPDATE_CUSTOMER,
    payload: { id, customer }
  };
}

export function deleteCustomer(id: string): DeleteCustomerAction {
  return {
    type: DELETE_CUSTOMER,
    payload: id
  };
}
