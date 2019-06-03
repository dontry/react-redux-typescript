import React from "react";
import { Button, TextField } from "@material-ui/core";
import { StyledBarWrapper } from "./style";
import { updateQuery } from "../../actions/customers";

interface Props {
  onChange: typeof updateQuery;
  onOpen(): void;
}

const CommandBar = ({ onOpen, onChange }: Props) => {
  const _handleOpen = () => {
    onOpen();
  };

  const _handleChange = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    onChange(e.currentTarget.value);
  };
  return (
    <StyledBarWrapper>
      <Button data-testid="create-btn" variant="contained" color="primary" onClick={_handleOpen}>
        Create
      </Button>
      <TextField data-testid="search-bar" id="search" label="Search" onChange={_handleChange} />
    </StyledBarWrapper>
  );
};

export default CommandBar;
