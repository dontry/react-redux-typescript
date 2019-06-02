import { ToggleEditorDialogAtion, TOGGLE_EDITOR_DIALOG } from "./types";

export function toggleEditorDialog(isOpen: boolean): ToggleEditorDialogAtion {
  return {
    type: TOGGLE_EDITOR_DIALOG,
    payload: isOpen
  };
}
