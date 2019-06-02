import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const DialogBody = styled.div`
  display: flex;
  width: 30vw;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0 16px 16px;
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
`;

export const StyledTitle = styled.h2`
  color: ${props => props.theme.palette.primary};
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 8px !important;
`;
