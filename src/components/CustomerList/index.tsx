import React from "react";
import { StyledListWrapper, StyledListHeader } from "./style";
import CustomerEntry from "../CustomerEntry";
import { Customer } from "../../models";
import { deleteCustomer } from "../../actions/customers";

interface Props {
  customers: Customer[];
  onDelete?: typeof deleteCustomer;
}

const CustomerList = ({ customers, onDelete }: Props) => {
  return (
    <StyledListWrapper>
      {customers.map(customer => (
        <CustomerEntry key={customer.id} customer={customer} onDelete={onDelete} />
      ))}
    </StyledListWrapper>
  );
};

export default CustomerList;
