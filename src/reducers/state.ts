import { Customer } from "../models";

export interface RootState {
  customers: Customer[];
}

export namespace RootState {
  export type CustomerState = Customer[];
}
