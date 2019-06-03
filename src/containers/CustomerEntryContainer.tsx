import { connect } from "react-redux";
import { toggleEditorDialog } from "../actions/ui";
import { deleteCustomer, selectCustomer } from "../actions/customers";
import CustomerEntry from "../components/CustomerEntry";

const dispatchProps = {
  onDelete: deleteCustomer,
  onOpen: () => toggleEditorDialog(true),
  selectCustomer
};

export default connect(
  null,
  dispatchProps
)(CustomerEntry);
