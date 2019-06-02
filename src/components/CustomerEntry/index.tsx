import React from "react";
import { Customer } from "../../models";
import { EntryWrapper, ButtonGroup } from "./style";
import { deleteCustomer } from "../../actions/customers";
import { Button } from "@material-ui/core";

interface Props {
  customer: Customer;
  onDelete?: typeof deleteCustomer;
}

const CustomerEntry = ({ customer, onDelete }: Props) => {
  const fullName = `${customer.firstName} ${customer.lastName}`;

  const _handleDelete = () => {
    onDelete!(customer.id);
  };

  return (
    <EntryWrapper>
      <span data-testid="customer-name">{fullName}</span>
      <ButtonGroup>
        <Button color="primary">Edit</Button>
        {onDelete && (
          <Button data-testid="delete-btn" color="secondary" onClick={_handleDelete}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </EntryWrapper>
  );
};

export default CustomerEntry;
