import React from "react";
import { Button, TextField } from "@material-ui/core";
import { StyledBarWrapper } from "./style";

const CommandBar = () => {
  return (
    <StyledBarWrapper>
      <Button variant="contained" color="primary">
        Create
      </Button>
      <TextField id="search" label="Search" />
    </StyledBarWrapper>
  );
};

export default CommandBar;
