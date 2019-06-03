import { customerReducer, initialState, selectCustomerByQuery } from "./customers";
import { createCustomer } from "../test/fixtures/customerMock";
import { Customer } from "../models";
import {
  addCustomer,
  deleteCustomer,
  updateCustomer,
  selectCustomer,
  updateQuery
} from "../actions/customers";
import { CustomerState } from "./state";
import _ from "lodash";

describe("customer reducer", () => {
  let state: CustomerState;
  beforeEach(() => {
    state = _.cloneDeep(initialState);
  });

  describe("customer list", () => {
    it("should add a customer", () => {
      const customer = createCustomer();
      const res = customerReducer(state, addCustomer(customer));

      expect(res.list.length).toEqual(1);
      expect(res.list[0]).toEqual(customer);
    });

    it("should delete a customer by id", () => {
      const customer = createCustomer();
      state = { ...state, list: [customer] };
      const res = customerReducer(state, deleteCustomer(customer.id));

      expect(res.list.length).toEqual(0);
    });

    it("should update a customer by id", () => {
      const customer = createCustomer();
      state = { ...state, list: [customer] };

      const updated = _.cloneDeep(customer);

      const res = customerReducer(state, updateCustomer(updated.id, updated));

      expect(res.list.length).toEqual(1);
      expect(res.list[0]).toEqual(updated);
    });
  });

  describe(" selectedId", () => {
    it("should select a customer by Id", () => {
      const customer = createCustomer();
      state = { ...state, list: [customer] };
      const res = customerReducer(state, selectCustomer(customer.id));

      expect(res.selectedId).toBe(customer.id);
    });
  });

  describe("query", () => {
    it("should update the customer query", () => {
      const res = customerReducer(state, updateQuery("query"));
      expect(res.query).toBe("query");
    });

    it("should filter customers by query", () => {
      const customers = [createCustomer(), createCustomer(), createCustomer()];
      state = { ...state, list: customers };
      const res = customerReducer(state, updateQuery(customers[0].firstName));

      expect(selectCustomerByQuery({ customers: res }).length).toBeGreaterThanOrEqual(1);
    });
  });
});
