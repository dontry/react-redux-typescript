import { Customer } from "../models";
import { ADD_CUSTOMER, DELETE_CUSTOMER, UPDATE_CUSTOMER } from "../actions/types";

const initialState: Customer[] = [
  {
    id: "123",
    firstName: "xxx",
    lastName: "xsdasfdsa",
    dob: Date.now().toString()
  }
];

export const customersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [action.payload];
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
