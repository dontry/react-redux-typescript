import React from "react";
import { Customer } from "../../models";
import { EntryWrapper, ButtonGroup } from "./style";
import { Button } from "@material-ui/core";
import { deleteCustomer, selectCustomer } from "../../actions/customers";

interface Props {
  customer: Customer;
  onDelete?: typeof deleteCustomer;
  selectCustomer?: typeof selectCustomer;
  onOpen?(): void;
}

const CustomerEntry = ({ customer, onDelete, onOpen, selectCustomer }: Props) => {
  const fullName = `${customer.firstName} ${customer.lastName}`;

  const _handleDelete = () => {
    onDelete!(customer.id);
  };

  const _handleEdit = () => {
    onOpen!();
    selectCustomer!(customer.id);
  };

  return (
    <EntryWrapper>
      <span data-testid="customer-name">{fullName}</span>
      <ButtonGroup>
        {onOpen && (
          <Button color="primary" onClick={_handleEdit}>
            Edit
          </Button>
        )}
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
