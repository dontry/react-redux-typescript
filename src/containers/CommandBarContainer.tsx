import React from "react";
import { connect } from "react-redux";
import CommandBar from "../components/CommandBar";
import { toggleEditorDialog } from "../actions/ui";
import { updateQuery } from "../actions/customers";

// const CommandBarContainer = ({}) => {
//     return (
//             <CommandBar onOpen={() => setOpen(true)}  />
//     )
// }

export const dispatchProps = {
  onOpen: () => toggleEditorDialog(true),
  onChange: updateQuery
};

export default connect(
  null,
  dispatchProps
)(CommandBar);
