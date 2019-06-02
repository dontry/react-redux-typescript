import { Customer } from "../models";

export interface UIState {
  isEditorDialogOpen: boolean;
}

export interface CustomerState {
  selectedId: string | null;
  query: string;
  list: Customer[];
}

export interface RootState {
  customers: CustomerState;
  ui: UIState;
}
