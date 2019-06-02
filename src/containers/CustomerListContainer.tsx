import { connect } from "react-redux";
import { RootState } from "../reducers/state";
import { deleteCustomer } from "../actions/customers";
import CustomerList from "../components/CustomerList";
import { selectCustomerByQuery } from "../reducers/customers";

export const mapStateToProps = (state: RootState) => ({
  customers: selectCustomerByQuery(state)
});

const dispatchProps = {
  onDelete: deleteCustomer
};

export default connect(
  mapStateToProps,
  dispatchProps
)(CustomerList);
