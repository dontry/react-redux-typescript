import React from "react";
import { StyledListWrapper, StyledListHeader } from "./style";
import CustomerEntryContainer from "../../containers/CustomerEntryContainer";
import { Customer } from "../../models";

interface Props {
  customers: Customer[];
}

const CustomerList = ({ customers }: Props) => {
  return (
    <StyledListWrapper>
      {customers.map(customer => (
        <CustomerEntryContainer key={customer.id} customer={customer} />
      ))}
    </StyledListWrapper>
  );
};

export default CustomerList;
