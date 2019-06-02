import { connect } from "react-redux";
import { RootState } from "../reducers/state";
import { deleteCustomer } from "../actions/customers";
import CustomerList from "../components/CustomerList";

export const mapStateToProps = (state: RootState) => ({
  customers: state.customers
});

const dispatchProps = {
  deleteCustomer
};

export default connect(
  mapStateToProps,
  dispatchProps
)(CustomerList);
