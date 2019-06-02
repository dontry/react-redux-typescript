import styled from "styled-components";

export const EntryWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.primary};

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonGroup = styled.span`
  button + button {
    margin-left: 8px;
  }
`;

export const StyledName = styled.span`
  font-size: 1em;
`;
