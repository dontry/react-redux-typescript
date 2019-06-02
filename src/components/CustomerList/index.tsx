import React from "react";
import { connect } from "react-redux";
import { Customer } from "../../models";
import { StyledListWrapper } from "./style";
import CustomerEntry from "../CustomerEntry";
import { RootState } from "../../reducers/state";
import { deleteCustomer } from "../../actions/customers";

const mapStateToProps = (state: RootState) => ({
  customers: state.customers
});

const dispatchProps = {
  deleteCustomer
};

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const CustomerList = ({ customers, deleteCustomer }: Props) => {
  return (
    <StyledListWrapper>
      {customers.map(customer => (
        <CustomerEntry customer={customer} onDelete={deleteCustomer} />
      ))}
    </StyledListWrapper>
  );
};

export default connect(
  mapStateToProps,
  dispatchProps
)(CustomerList);
