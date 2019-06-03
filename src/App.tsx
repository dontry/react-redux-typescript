import React from "react";
import "./App.css";
import CustomerListContainer from "./containers/CustomerListContainer";
import CommandBarContainer from "./containers/CommandBarContainer";
import { StyledListWrapper, StyledListTitle } from "./style";
import EditorDialogContainer from "containers/EditorDialogContainer";
import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <div className="App">
      <StyledListTitle>Customer List</StyledListTitle>
      <StyledListWrapper>
        <CommandBarContainer />
        <CustomerListContainer />
        <EditorDialogContainer />
      </StyledListWrapper>
    </div>
  );
};

export default hot(App);
