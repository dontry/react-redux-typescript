import { Customer } from "../models";
import { createSelector } from "reselect";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
  SELECT_CUSTOMER,
  UPDATE_QUERY
} from "../actions/types";
import { CustomerState, RootState } from "./state";
import { combineReducers } from "redux";

export const initialState: CustomerState = {
  selectedId: null,
  query: "",
  list: []
};

export const selectedId = (state = initialState.selectedId, action: any) => {
  switch (action.type) {
    case SELECT_CUSTOMER:
      return action.payload;
    default:
      return state;
  }
};

export const query = (state = initialState.query, action: any) => {
  switch (action.type) {
    case UPDATE_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export const list = (state = initialState.list, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload];
    case DELETE_CUSTOMER:
      return state.filter(customer => customer.id !== action.payload);
    case UPDATE_CUSTOMER:
      return state.map(customer =>
        customer.id === action.payload.id ? action.payload.customer : customer
      );
    default:
      return state;
  }
};

export const customerReducer = combineReducers({
  selectedId,
  list,
  query
});

// Selector
export const selectCustomers = (state: any): Customer[] => state.customers.list;
export const selectQuery = (state: any): string => state.customers.query;
export const selectCustomerById = createSelector(
  selectCustomers,
  state => state.customers.selectedId,
  (customers: Customer[], id: string | null) => customers.find(customer => customer.id === id)
);

export const selectCustomerByQuery = createSelector(
  selectCustomers,
  selectQuery,
  (customers: Customer[], query: string) => {
    if (query === "") {
      return customers;
    } else {
      const regex: RegExp = new RegExp(query, "i");
      return customers.filter(customer => {
        const fullname = `${customer.firstName} ${customer.lastName}`;
        return regex.test(fullname);
      });
    }
  }
);
