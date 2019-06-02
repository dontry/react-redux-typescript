import { TOGGLE_EDITOR_DIALOG } from "../actions/types";

const initialState = {
  isEditorDialogOpen: false
};

export const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_EDITOR_DIALOG:
      return {
        ...state,
        isEditorDialogOpen: action.payload
      };
    default:
      return state;
  }
};
