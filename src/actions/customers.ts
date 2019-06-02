import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  AddCustomerAction,
  DeleteCustomerAction,
  UpdateCustomerAction,
  UpdateQueryAction,
  SelectCustomerAction,
  SELECT_CUSTOMER,
  UPDATE_QUERY
} from "./types";
import { Customer } from "../models";

export function selectCustomer(id: string | null): SelectCustomerAction {
  return {
    type: SELECT_CUSTOMER,
    payload: id
  };
}

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

export function updateQuery(query: string): UpdateQueryAction {
  return {
    type: UPDATE_QUERY,
    payload: query
  };
}
