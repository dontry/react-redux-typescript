import React from "react";
import { Button, TextField } from "@material-ui/core";
import { StyledBarWrapper } from "./style";
import { UpdateQueryAction } from "actions/types";
import { updateQuery } from "actions/customers";

interface Props {
  onChange: typeof updateQuery;
  onOpen(): void;
}

const CommandBar = ({ onOpen, onChange }: Props) => {
  const _handleOpen = () => {
    onOpen();
  };

  const _handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };
  return (
    <StyledBarWrapper>
      <Button variant="contained" color="primary" onClick={_handleOpen}>
        Create
      </Button>
      <TextField id="search" label="Search" />
    </StyledBarWrapper>
  );
};

export default CommandBar;
