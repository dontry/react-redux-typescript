import { combineReducers } from "redux";
import { customersReducer } from "./customers";
import { RootState } from "./state";

export const rootReducer = combineReducers<RootState>({
  customers: customersReducer as any
});

export * from "./state";