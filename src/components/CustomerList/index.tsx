import React from "react";
import { StyledListWrapper } from "./style";
import CustomerEntry from "../CustomerEntry";
import { Customer } from "../../models";
import { deleteCustomer } from "../../actions/customers";

interface Props {
  customers: Customer[];
  deleteCustomer?: typeof deleteCustomer;
}

const CustomerList = ({ customers, deleteCustomer }: Props) => {
  return (
    <StyledListWrapper>
      {customers.map(customer => (
        <CustomerEntry key={customer.id} customer={customer} onDelete={deleteCustomer} />
      ))}
    </StyledListWrapper>
  );
};

export default CustomerList;
