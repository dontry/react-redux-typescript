import styled from "styled-components";

export const StyledListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 600px;
  border: 1px solid ${props => props.theme.colors.primary};
  padding-left: 0;
`;

export const StyledListHeader = styled.div`
  width: 100%;
  height: 1.5rem;
  background: ${props => props.theme.colors.primary};
  text-align: left;
  line-height: 1.5em;
  padding: 3px 16px;
  color: #fff;
`;
