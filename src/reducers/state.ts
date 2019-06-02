import { Customer } from "../models";

export interface RootState {
  customers: RootState.CustomerState;
}

export namespace RootState {
  export type CustomerState = Customer[];
}
