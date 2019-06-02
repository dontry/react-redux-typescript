import React from "react";
import "./App.css";
import CustomerListContainer from "./containers/CustomerListContainer";
import CommandBar from "./components/CommandBar";
import { StyledListWrapper, StyledListTitle } from "./style";

function App() {
  return (
    <div className="App">
      <StyledListTitle>Customer List</StyledListTitle>
      <StyledListWrapper>
        <CommandBar />
        <CustomerListContainer />
      </StyledListWrapper>
    </div>
  );
}

export default App;
