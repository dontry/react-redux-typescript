import { connect } from "react-redux";
import { RootState } from "../reducers/state";
import CustomerList from "../components/CustomerList";
import { selectCustomerByQuery } from "../reducers/customers";

export const mapStateToProps = (state: RootState) => ({
  customers: selectCustomerByQuery(state)
});

export default connect(mapStateToProps)(CustomerList);
