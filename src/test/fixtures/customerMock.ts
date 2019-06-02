import faker from "faker";
import { Customer } from "../../models";

interface Options {
  seed: number;
}

export function createCustomer(options?: Options): Customer {
  if (options) {
    if (options.seed) {
      faker.seed(options.seed);
    }
  }
  return {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    dob: faker.date.past(20).toUTCString()
  };
}
