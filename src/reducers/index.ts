import { combineReducers } from "redux";
import { customerReducer } from "./customers";
import { uiReducer } from "./ui";
import { RootState } from "./state";

export const rootReducer = combineReducers<RootState>({
  customers: customerReducer as any,
  ui: uiReducer as any
});
export * from "./state";
