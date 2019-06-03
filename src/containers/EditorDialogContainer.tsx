import { connect } from "react-redux";
import { addCustomer, updateCustomer, selectCustomer } from "../actions/customers";
import { toggleEditorDialog } from "../actions/ui";
import EditorDialog from "../components/EditorDialog";
import { selectCustomerById } from "../reducers/customers";
import { RootState } from "../reducers";

const mapStateToProps = (state: RootState) => {
  return {
    customer: selectCustomerById(state),
    isOpen: state.ui.isEditorDialogOpen
  };
};

const dispatchProps = {
  onCreate: addCustomer,
  onUpdate: updateCustomer,
  toggleEditorDialog,
  selectCustomer
};

export default connect(
  mapStateToProps,
  dispatchProps
)(EditorDialog);
