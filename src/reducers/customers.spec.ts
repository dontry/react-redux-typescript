import { customersReducer} from "./customers";
import { createCustomer } from "../test/fixtures/customerMock";
import { addCustomer, deleteCustomer, updateCustomer } from "../actions/customers";
import _ from 'lodash'
import { Customer } from "src/models";


describe('customer reducer', () => {
    it("should add a customer", () => {
        const state: Customer[] = [];
        const customer = createCustomer();
        const res = customersReducer(state, addCustomer(customer));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(customer);
    })

    it("should delete a customer by id", () => {
        const customer = createCustomer();
        const state: Customer[] = [customer];
        const res = customersReducer(state, deleteCustomer(customer.id));

        expect(res.length).toEqual(0);
    })

    it("should update a customer by id", () => {
        const customer = createCustomer();
        const state: Customer[] = [customer];

        const updated = _.cloneDeep(customer);

        const res = customersReducer(state, updateCustomer(updated.id, updated));

        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(updated)
    })
})
