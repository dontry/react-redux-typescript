import React from "react";
import { Customer } from "../../models";
import { EntryWrapper } from "./style";
import { deleteCustomer } from "../../actions/customers";

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
      <span>
        <button>Edit</button>
        {onDelete && <button data-testid="delete-btn" onClick={_handleDelete}>Delete</button>}
      </span>
    </EntryWrapper>
  );
};

export default CustomerEntry;
