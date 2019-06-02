import React from "react";
import "./App.css";
import CustomerListContainer from "./containers/CustomerListContainer";
import { StyledListWrapper, StyledListTitle } from "./style";

function App() {
  return (
    <div className="App">
      <StyledListWrapper>
        <StyledListTitle>Customer List</StyledListTitle>
        <CustomerListContainer />
      </StyledListWrapper>
    </div>
  );
}

export default App;
