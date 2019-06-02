import * as faker from "faker";
import { Customer } from "../../models";

export function createCustomer():Customer {
    return {
        id: faker.random.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dob: faker.date.past(20).toUTCString()
    }
}